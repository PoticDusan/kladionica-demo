import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AngularFireList, AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { TeamModel } from '../models/team-model.model';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  private dbPath = '/teams';
  usersRef: AngularFireObject<TeamModel>;

  constructor(private db: AngularFireDatabase) { }

  getAllTeams(){
    return this.db.list(this.dbPath).valueChanges();
  }
}
