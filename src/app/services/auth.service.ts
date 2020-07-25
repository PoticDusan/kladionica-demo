import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { UserModel } from '../models/user-model.model';
import { UserService } from './user.service';
import { switchMap } from 'rxjs/operators';
import { empty, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  user$: Observable<firebase.User>;

  constructor(private userService: UserService, private afAuth: AngularFireAuth, private route: ActivatedRoute) {
    this.user$ = afAuth.authState;
  }

  isLoggedIn() {
    return this.user$;
  }


  get appUser$(): Observable<UserModel> {
    return this.user$.pipe(
      switchMap(user => {
        if (user) return this.userService.get(user.uid).valueChanges();
        return of(null);
      })
    );
  }


  /* Sign up */
  signUp(user, password) {
    this.afAuth
      .auth
      .createUserWithEmailAndPassword(user.email, password)
      .then(res => {
        this.userService.create(user, res.user.uid);
        console.log('Successfully signed up!', res);
      })
      .catch(error => {
        console.log('Something is wrong:', error.message);
      });
  }

  /* Sign in */
  signIn(email: string, password: string) {
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);
    this.afAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        console.log('Successfully signed in!');
      })
      .catch(err => {
        console.log('Something is wrong:', err.message);
      });
  }

  /* Sign out */
  signOut() {
    this.afAuth
      .auth
      .signOut();
  }

}
