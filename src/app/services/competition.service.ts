import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {

  constructor(private db: AngularFireDatabase) { }

  getAll(){
    return this.db.list('/competitions');
  }

  get(uId){
    return this.db.object('/competitions/'+ uId);
  }
}
