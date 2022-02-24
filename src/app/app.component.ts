import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testUnitaire';
  totalVotes:  any = 4;
  upVote(){
    this.totalVotes++
  }
}
