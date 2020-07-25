
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BettingService {

  private selectedMatches = [];
  private selectedMatch;

  add(match) {
    let exists = false;

    for (let i = 0; i < this.selectedMatches.length; i++) {
      if (this.selectedMatches[i].matchKey == match.matchKey) {
        exists = true;

        if (this.selectedMatches[i].oddName != match.oddName) {
          this.selectedMatches[i].oddName = match.oddName;
          this.selectedMatches[i].oddValue = match.oddValue;
          console.log('uploaded');
        }
        else {
          this.delete(match.matchKey);
          i--;
          console.log('deleted');
        }
      }
    }
    if (!exists) {
      this.selectedMatches.push(match);
      console.log('added');
    }
  }

  delete(key) {
    for (let i = 0; i < this.selectedMatches.length; i++) {
      if (this.selectedMatches[i].matchKey == key) {
        this.selectedMatches.splice(i, 1);
        i--;
      }
    }
  }

  getAll() {
    return this.selectedMatches;
  }

  deleteAll() {
    this.selectedMatches = [];
  }
}
