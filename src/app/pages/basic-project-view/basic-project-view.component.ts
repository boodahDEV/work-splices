import { Component, OnInit } from '@angular/core';
import { NbDialogRef, NbDialogService } from '@nebular/theme';
import { BasicDonateComponent } from '../basic-donate/basic-donate.component';
import { BasicUnirmeComponent } from '../basic-unirme/basic-unirme.component';

@Component({
  selector: 'app-basic-project-view',
  templateUrl: './basic-project-view.component.html',
  styleUrls: ['./basic-project-view.component.scss']
})
export class BasicProjectViewComponent implements OnInit {
  users: { name: string, title: string }[] = [
    { name: 'Faustino Arauz', title: 'Nurse' },
    { name: 'Faustino Arauz', title: 'Doctor of Medicine' },
    { name: 'Beatriz Jimenez', title: 'Janitor' },
  ];
  selectedItem:any

  constructor(
    private dialogService: NbDialogService,
    protected dialogRef: NbDialogRef<any>,
  ) { }

  ngOnInit(): void {
  }

  openUnirme(){
    this.dialogService.open(BasicUnirmeComponent, {closeOnBackdropClick:false,closeOnEsc:false})
    .onClose.subscribe(()=>{
      console.log("Open join")
    });
  }

  openDonar(){
    this.dialogService.open(BasicDonateComponent, {closeOnBackdropClick:true, closeOnEsc:false})
    .onClose.subscribe(()=>{
      console.log("Open donate")
    });
  }

  exit_dialog(){
    this.dialogRef.close();
  }

}
