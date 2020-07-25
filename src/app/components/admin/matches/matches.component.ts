import { Component, OnInit } from '@angular/core';
import { MatchService } from 'src/app/services/match.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss']
})
export class MatchesComponent implements OnInit {

  matches$;
  filteredMatches;

  constructor(private matchService: MatchService) {
    this.matches$ = this.matchService.getAll()
      .snapshotChanges().pipe(
        map(changes =>
          changes.map(c => ({ key: c.payload.key, ...c.payload.val() as {} }))
        )
      );
  }


  // filter(query) {
  //   let filteredMatches = (query) ?
  //     this.matches$.filter(match => match.team1.toLowerCase().includes(query.toLowerCase())) :
  //     this.matches$;

  // }

  ngOnInit() {
    // this.matchService.getMatches().subscribe((matches) => {
    //   this.matches$ = matches;
    //   console.log(this.matches$);
    // });
  }
}
