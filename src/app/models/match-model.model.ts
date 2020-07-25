import { TeamModel } from './team-model.model';
import { OddModel } from './odd-model.model';
import { AngularFireDatabase } from 'angularfire2/database';

export interface MatchModel {
    sport: string;
    competition: string;
    team1: string;
    team2: string;
    date: string;
    time: string;
    oddsID: string;
    matchID: string;
}
