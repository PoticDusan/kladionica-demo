import { Injectable } from '@angular/core';
import { UserModel } from '../models/user-model.model';
import { AngularFireList, AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import * as firebase from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private dbPath = '/users';
  usersRef: AngularFireObject<UserModel>;

  constructor(private db: AngularFireDatabase) { }

  getUsers() {
    return this.db.list(this.dbPath);
  }

  update(user: firebase.User) {
    this.db.object('/users/' + user.uid).update({
      name: user.displayName,
      email: user.email
    });
  }

  create(user: UserModel, uid) {
    return this.db.object('/users/'+uid).set({
      name: user.name,
      email:user.email,
      cash: 0,
      isAdmin: false
    });
  }

  get(uid: string): AngularFireObject<UserModel> {
    return this.db.object('/users/' + uid);
  }
}
