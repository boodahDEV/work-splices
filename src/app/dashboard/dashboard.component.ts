import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  is_login = true;
  i = [1,2,3,4,54]

  constructor() { }

  ngOnInit(): void {
  }

}
