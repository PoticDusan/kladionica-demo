import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase, AngularFireObject } from 'angularfire2/database';


@Injectable({
  providedIn: 'root'
})
export class MatchService {

  constructor(private db: AngularFireDatabase) { }

  create(match) {
    return this.db.list('/matches').push(match).key;
  }

  getAll() {
    return this.db.list('/matches');
  }

  get(uId) {
    return this.db.object('/matches/' + uId);
  }

  update(uId, match) {
    return this.db.object('/matches/' + uId).update(match);
  }

  delete(uId){
    return this.db.object('/matches/'+ uId).remove();
  }
}