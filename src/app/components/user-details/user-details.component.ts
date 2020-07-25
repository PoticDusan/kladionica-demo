import { Component, OnInit, Input } from '@angular/core';
import { UserModel } from 'src/app/models/user-model.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  @Input() user: UserModel;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  // createUser() {
  //   this.userService.createUser(this.user);
  // }

  // deleteUser() {
  //   this.userService
  //     .deleteUser(this.user.userID.toString())
  //     .catch(err => console.log(err));
  // }
}
