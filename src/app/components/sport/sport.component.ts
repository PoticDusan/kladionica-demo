import { Component, OnInit, Input } from '@angular/core';
import { SportService } from 'src/app/services/sport.service';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.scss']
})
export class SportComponent implements OnInit {

  // @Input() sport;
  sports = [];

  constructor(private sportService: SportService) {
    this.sportService.getAll()
      .snapshotChanges().pipe(
        map(changes =>
          changes.map(c => ({ key: c.payload.key, ...c.payload.val() as {} }))
        )
      ).subscribe(sports => {
        this.sports = sports;
        console.log(this.sports);

      });
  }

  ngOnInit() {
    // this.sportService.getAll()
    //   .snapshotChanges().pipe(
    //     map(changes =>
    //       changes.map(c => ({ key: c.payload.key, ...c.payload.val() as {} }))
    //     )
    //   ).subscribe(sports => {
    //     this.sports = sports;
    //   });

    // console.log(this.sport);
    // this.sportService.get(this.sport).valueChanges().pipe(take(1)).subscribe(sport => {
    //   this.sports.push(sport);
    //   console.log(sport);
    // });
  }
  // print() {
  //   console.log(this.sports);
  // }

}
