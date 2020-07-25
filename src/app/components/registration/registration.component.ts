import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserModel } from 'src/app/models/user-model.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  user: UserModel = new UserModel();
  password;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    console.log('Register method!');
  }

  register(){
    this.authService.signUp(this.user, this.password);
    console.log('Register method!');
  }
}
