import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel-der',
  templateUrl: './panel-der.component.html',
  styleUrls: ['./panel-der.component.scss']
})
export class PanelDerComponent implements OnInit {
  users: { name: string, title: string }[] = [
    { name: 'Proyecto 1', title: 'Nurse' },
    { name: 'Proyecto 2', title: 'Doctor of Medicine' },
    { name: 'Janitor', title: 'Janitor' },
    { name: 'Perry Cox', title: 'Doctor of Medicine' },
    { name: 'Ben Sullivan', title: 'Carpenter and photographer' },
    { name: 'Ben Sullivan', title: 'Carpenter and photographer' },
    { name: 'Ben Sullivan', title: 'Carpenter and photographer' },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
