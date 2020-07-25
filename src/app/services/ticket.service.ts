import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class TicketService {


  constructor(private db: AngularFireDatabase) { }

  create(match) {
    return this.db.list('/tickets').push(match).key;
  }

  getAll() {
    return this.db.list('/tickets');
  }

  get(uId) {
    return this.db.object('/tickets/' + uId);
  }

  delete(uId){
    return this.db.object('/tickets/'+ uId).remove();
  }
}
