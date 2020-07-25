import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserModel } from 'src/app/models/user-model.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  appUser: UserModel;
  email: string;
  password: string;

  constructor(private auth: AuthService) { }

  login() {                                        
    this.auth.signIn(this.email, this.password);
    console.log("Logged in");
  }
}
