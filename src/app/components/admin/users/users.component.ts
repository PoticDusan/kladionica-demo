import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { map } from 'rxjs/operators';
import { AngularFireList } from 'angularfire2/database';
import { UserModel } from 'src/app/models/user-model.model';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  // users: AngularFireList<UserModel>;
  users;
  constructor(private userService: UserService) { }

  ngOnInit() {
    // this.userService.getUsers().subscribe((users: UserModel[]) => {
    //   this.users = users;
    //   console.log(this.users);
    // });
    this. users = this.userService.getUsers()
      .snapshotChanges().pipe(
        map(changes =>
          changes.map(c => ({ key: c.payload.key, ...c.payload.val() as {} }))
        )
      );
  }

  // deleteUser(){

  // }
}
