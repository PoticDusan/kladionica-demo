import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BettingComponent } from './components/betting/betting.component';
import { TicketsComponent } from './components/tickets/tickets.component';
import { LoginComponent } from './components/login/login.component';
import { UsersComponent } from './components/admin/users/users.component';
import { MatchesComponent } from './components/admin/matches/matches.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AdminGuardService } from './services/admin-auth-guard.service';
import { MatchFormComponent } from './components/admin/match-form/match-form.component';
import { RegistrationComponent } from './components/registration/registration.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'betting', component: BettingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'tickets', component: TicketsComponent, canActivate: [AuthGuardService] },
  { path: 'admin/matches/new', component: MatchFormComponent, canActivate: [AuthGuardService, AdminGuardService] },
  { path: 'admin/matches/:id', component: MatchFormComponent, canActivate: [AuthGuardService, AdminGuardService] },
  { path: 'admin/matches', component: MatchesComponent, canActivate: [AuthGuardService, AdminGuardService] },
  { path: 'admin/users', component: UsersComponent, canActivate: [AuthGuardService, AdminGuardService] },
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
