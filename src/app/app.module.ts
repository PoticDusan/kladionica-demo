import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import  { ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './components/admin/users/users.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SportComponent } from './components/sport/sport.component';
import { CompetitionComponent } from './components/competition/competition.component';
import { MatchComponent } from './components/match/match.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { BettingComponent } from './components/betting/betting.component';
import { HomeComponent } from './components/home/home.component';
import { TicketsComponent } from './components/tickets/tickets.component';
import { LoginComponent } from './components/login/login.component';
import { MatchesComponent } from './components/admin/matches/matches.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { AdminGuardService } from './services/admin-auth-guard.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserService } from './services/user.service';
import { MatchFormComponent } from './components/admin/match-form/match-form.component';
import { SportService } from './services/sport.service';
import { SubNavbarComponent } from './components/sub-navbar/sub-navbar.component';
import { TicketFormComponent } from './components/ticket-form/ticket-form.component';
import { OddsComponent } from './components/odds/odds.component';
import { RegistrationComponent } from './components/registration/registration.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserDetailsComponent,
    NavbarComponent,
    SportComponent,
    CompetitionComponent,
    MatchComponent,
    TicketComponent,
    BettingComponent,
    HomeComponent,
    TicketsComponent,
    LoginComponent,
    MatchesComponent,
    MatchFormComponent,
    SubNavbarComponent,
    TicketFormComponent,
    OddsComponent,
    RegistrationComponent
  ],
  imports: [
    FormsModule,
    MDBBootstrapModule.forRoot(),
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService,
    AuthGuardService,
    AdminGuardService,
    UserService,
    SportService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
