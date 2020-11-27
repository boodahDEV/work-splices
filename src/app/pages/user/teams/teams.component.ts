import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { MakeTeamComponent } from '../make-team/make-team.component';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {

  constructor(private dialogService: NbDialogService) { }

  ngOnInit(): void {
  }

  open(){
    this.dialogService.open(MakeTeamComponent, {closeOnBackdropClick:false,closeOnEsc:true});
  }

}
