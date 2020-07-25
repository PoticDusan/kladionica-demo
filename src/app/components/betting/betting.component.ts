import { Component, OnInit, Output, Input } from '@angular/core';
import { EventEmitter } from 'protractor';
import { SportService } from 'src/app/services/sport.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-betting',
  templateUrl: './betting.component.html',
  styleUrls: ['./betting.component.scss']
})
export class BettingComponent {

  sport = "0";

  constructor() { }

}
