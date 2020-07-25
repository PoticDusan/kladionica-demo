import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserModel } from 'src/app/models/user-model.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  appUser: UserModel;
  email: string;
  password: string;

  constructor(private auth: AuthService) {
    auth.appUser$.subscribe(appUser => this.appUser = appUser);
  }

  login() {
    this.auth.signIn(this.email, this.password);
    console.log("Logged in");
  }

  logout() {
    this.auth.signOut();
    console.log("Logged out");
  }
}
