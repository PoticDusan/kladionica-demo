import { Component, OnInit, OnDestroy } from '@angular/core';
import { SportService } from 'src/app/services/sport.service';
import { SportModel } from 'src/app/models/sport-model.model';
import { CompetitionModel } from 'src/app/models/competition-model.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatchModel } from 'src/app/models/match-model.model';
import { MatchService } from 'src/app/services/match.service';
import { OddService } from 'src/app/services/odd.service';
import { ActivatedRoute, Router } from '@angular/router';
import { take, map } from 'rxjs/operators';


@Component({
  selector: 'app-match-form',
  templateUrl: './match-form.component.html',
  styleUrls: ['./match-form.component.scss']
})
export class MatchFormComponent implements OnInit {

  matchForm: FormGroup;
  showBtn = false;

  sportList = [
    { _id: '1', name: 'Fudbal' },
    { _id: '2', name: 'Košarka' },
    { _id: '3', name: 'Tenis' }
  ];
  competitionList = [];

  newMatch = {
    sport: '', competition: '', team1: '', team2: '', date: '', time: '', oddsID: '', matchID: ''
  };

  newOdds = {
    "tip1": '', "tip2": '', "tip12": '', "tip02": '', "tip1x": '', "tip3plus": '', "tip4plus": '',
    "tipgg": '', "tipgg3plus": '', "tipng": '', "tipx": '', "tipx2": ''
  };

  //variables when update
  isUpdate = false;
  match;
  match_uId;
  odd;
  odd_uId;


  constructor(
    private router: Router,
    private route: ActivatedRoute, private _fb: FormBuilder,
    private matchService: MatchService, private oddService: OddService) {
    this.validateForm();
  }

  ngOnInit() {
    this.match_uId = this.route.snapshot.paramMap.get('id');
    console.log(this.match_uId);
    this.matchService.get(this.match_uId).valueChanges().pipe(take(1)).subscribe(match => {
      this.match = match;
      if (this.match != null) {
        this.showBtn = true;  // show button delete
        this.isUpdate = true; //for updating function isUpdate = true
        console.log("uso 1");
        this.newMatch = this.match; //setting match
        console.log('uso 2');
        this.odd_uId = this.newMatch.oddsID; //getting oddsID from Match
        this.oddService.get(this.odd_uId).valueChanges().pipe(take(1)).subscribe(odd => {
          console.log('uso 3');
          this.odd = odd;
          this.newOdds = this.odd; // setting odds
          console.log('uso 4');
        })
      }
    });
  }

  saveMatch() {
    if (this.isUpdate == false) {
      let oddID = this.oddService.create(this.newOdds);      // create odd
      this.newMatch.oddsID = oddID;                          // add new odd uID to newMatch
      let id = this.matchService.create(this.newMatch);
      console.log('id: ' + oddID + " id match " + id);      // create match
      this.router.navigate(['/admin/matches/' + id]);
    }
    else {
      this.updateMatch();
    }

  }

  updateMatch() {
    this.oddService.update(this.odd_uId, this.newOdds);    // update odds
    this.matchService.update(this.match_uId, this.newMatch);// update match
    this.router.navigate(['/admin/matches']);
  }


  delete() {
    if (!confirm('Da li ste sigurni da želite da izvrišete ovaj meč?')) return;
    console.log('match id: ' + this.match_uId, 'odds id: ' + this.odd_uId);
    this.oddService.delete(this.odd_uId);
    this.matchService.delete(this.match_uId);
    this.router.navigate(['/admin/matches']);
  }

  validateForm() {

    this.matchForm = this._fb.group({
      sport_id: ['', Validators.required],
      competition_id: ['', Validators.required],
      sport: '',
      competition: '',
      team1: '',
      team2: '',
      date: '',
      time: '',
      "tip1": '',
      "tip2": '',
      "tip12": '',
      "tip02": '',
      "tip1x": '',
      "tip3plus": '',
      "tip4plus": '',
      "tipgg": '',
      "tipgg3plus": '',
      "tipng": '',
      "tipx": '',
      "tipx2": ''
    })

    this.matchForm.controls['sport_id'].valueChanges.subscribe((value) => {

      switch (value) {
        case 'Fudbal': this.competitionList = [{ id: '1', name: 'UEFA Liga Šampiona' }, { id: '2', name: 'UEFA Liga Evrope' }];
          break;
        case 'Košarka': this.competitionList = [{ id: '1', name: 'USA - NBA' }];
          break
        case 'Tenis': this.competitionList = [{ id: '1', name: 'Rolan Garos' }, { id: '2', name: 'Vimbldon' }, { id: '3', name: 'OP Australije' }];
          break;
      }
    });
  }
}