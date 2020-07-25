import { Component, OnInit, Input } from '@angular/core';
import { BettingService } from 'src/app/services/betting.service';
import { TicketService } from 'src/app/services/ticket.service';
import { AuthService } from 'src/app/services/auth.service';
import { map } from 'rxjs/operators';
import { MatchComponent } from '../match/match.component';

@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.scss']
})
export class TicketFormComponent implements OnInit {

  ticketMatches = [];
  ticket;
  price;
  totalOdd = 0;
  user;


  constructor(private bettingService: BettingService, private ticketService: TicketService, private auth: AuthService) {
    auth.isLoggedIn().subscribe(user => {
      this.user = user;
    });
  }

  ngOnInit() {
    this.validateForm();
  }

  validateForm() {
    this.ticketMatches = this.bettingService.getAll();
  }

  createTicket() {
    this.ticket = {
      ticketNumber: Math.floor((Math.random() * 10000) + 1) + '', ticketDate: new Date().toLocaleDateString(), ticketTime: new Date().toLocaleTimeString(), ticketStatus: 'live',
      userID: this.user.uid, ticketPrice: this.price, ticketMatches: this.ticketMatches
    };
    console.log(this.ticket);
    let key = this.ticketService.create(this.ticket);
    console.log("Kreiran je novi tiket: " + key);

  }

  deleteAll() {
    this.bettingService.deleteAll();
    this.validateForm();
  }

  deleteMatch(match) {
    this.bettingService.delete(match.matchKey);
    this.validateForm();
  }
}


