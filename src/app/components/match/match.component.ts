import { Component, OnInit, Input, Output } from '@angular/core';
import { MatchService } from 'src/app/services/match.service';
import { map, take } from 'rxjs/operators';
import { OddService } from 'src/app/services/odd.service';
import { BettingService } from 'src/app/services/betting.service';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss']
})
export class MatchComponent implements OnInit {

  @Input() sport;
  @Input() competition;


  selectedMatch;

  matches = [];
  completeMatches = [];

  constructor(private matchService: MatchService, private oddsService: OddService,
    private bettingService: BettingService) { }

  ngOnInit() {
    this.matchService.getAll()
      .snapshotChanges().pipe(
        map(changes =>
          changes.map(c => ({ key: c.payload.key, ...c.payload.val() as {} }))
        )
      ).subscribe(matches => {
        matches.forEach(match => {
          console.log('Izabrani sport: ' + this.sport);
          console.log('Izabrani competition: ' + this.competition);

          if (match['sport'] == this.sport.key)
            if (match['competition'] == this.competition.key)
              this.matches.push(match);
        })
        this.matches.forEach(match => {
          this.oddsService.get(match.oddsID).valueChanges().pipe(take(1)).subscribe(odds => {
            let arrayOdds = [];
            console.log('Pocinje stampanje: ');
            for (let [key, value] of Object.entries(odds)) {
              let oddKey = key;
              let oddValue = value;
              console.log(oddKey + ' : ' + oddValue);
              arrayOdds.push(Object.assign({ [oddKey]: oddValue }));
            }
            console.log(arrayOdds);
            this.completeMatches.push(Object.assign({}, match, { arrayOdds }));
            console.log(this.completeMatches);
            console.log('Zavrsava se stampanje: ');
          });
        });
        console.log(this.completeMatches);;
      });
  }

  selectOdd(match, odd) {

    this.selectedMatch = {
      matchKey: '', matchID: '', team1: '', team2: '', date: '', time: '', oddName: '', oddValue: ''
    };
    this.selectedMatch.matchKey = match.key;
    this.selectedMatch.matchID = match.matchID;
    this.selectedMatch.team1 = match.team1;
    this.selectedMatch.team2 = match.team2;
    this.selectedMatch.date = match.date;
    this.selectedMatch.time = match.time;
    let tip = Object.keys(odd);
    let kvota = Object.values(odd);
    this.selectedMatch.oddName = tip[0];
    this.selectedMatch.oddValue = '' + kvota[0];

    this.bettingService.add( this.selectedMatch);
    this.selectedMatch = null;
  }
}
