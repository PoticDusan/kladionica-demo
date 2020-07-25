import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {

  @Input() match; //match object with only one key
  @Input() odd;   //selected odd for match

  ticketMatches = [];

  constructor() { }

  ngOnInit() {
    
  }

}
