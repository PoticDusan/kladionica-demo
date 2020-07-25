import { MatchModel } from './match-model.model';
import { OddModel } from './odd-model.model';

export class TicketModel {
    ticketID:            number;
    ticketDate:          string;
    userID:              number;
    ticketNumber:        string;
    ticketStatus:        string;
    ticketTime:          string;
    matches: [
        {
            match:       MatchModel;      //vratiti na matchID
            matchStatus: string; 
            odd:         OddModel;        //vratiti na oddID
        }
    ];
}
