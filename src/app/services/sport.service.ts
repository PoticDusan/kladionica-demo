import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class SportService {

  constructor(private db: AngularFireDatabase) { }

  getAll(){
    return this.db.list('/sports');
  }

  get(uId){
    return this.db.object('/sports/'+ uId);
  }
}
