import { Component, OnInit } from '@angular/core';
import { TicketService } from 'src/app/services/ticket.service';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {

  tickets = [];
  selectedTicket;
  user;

  constructor(private ticketService: TicketService, private auth: AuthService) {
    this.ticketService.getAll()
      .valueChanges().pipe()
      .subscribe(tickets => {
        tickets.forEach(ticket => {
          if (ticket['userID'] == this.user.uid)
            this.tickets.push(ticket);
        })
      });
  }

  ngOnInit() {
    this.auth.isLoggedIn().subscribe(res => {
      this.user = res;
    });
  }

}
