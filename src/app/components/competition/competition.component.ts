import { Component, OnInit, Input } from '@angular/core';
import { CompetitionService } from 'src/app/services/competition.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.scss']
})
export class CompetitionComponent implements OnInit {

  @Input() sport;

  competitions = [];

  constructor(private competitionService: CompetitionService) {}
  
  ngOnInit(){
    this.competitionService.getAll()
    .snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() as {} }))
      )
    ).subscribe(competitions => {
      competitions.forEach(comp => {
        console.log('Izabrani sport:');
        console.log(this.sport);
        console.log('Izabrani sport key:');
        console.log(this.sport.key);
        if (comp['competitionSport'] == this.sport.key)
          this.competitions.push(comp);
      });
    });
  }

}
