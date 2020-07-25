import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class OddService {

  constructor(private db: AngularFireDatabase) { }

  create(odd) {
    return this.db.list('/odds').push(odd).key;
  }

  get(uId) {
    return this.db.object('/odds/' + uId);
  }

  update(uId, odd){
    return this.db.object('/odds/'+ uId).update(odd);
  }

  delete(uId){
    return this.db.object('/odds/'+ uId).remove();
  }
}
