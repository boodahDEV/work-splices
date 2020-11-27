import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-make-team',
  templateUrl: './make-team.component.html',
  styleUrls: ['./make-team.component.scss']
})
export class MakeTeamComponent implements OnInit {
  people = { name: String, title: String } [10] = [
  ];
  constructor() {
    
   }

  ngOnInit(): void {
  }

  getUser(value:any){
    if(this.people.length < 3)
      this.people.push({ name: 'boodah', title: 'Nurse' })
  }

}
