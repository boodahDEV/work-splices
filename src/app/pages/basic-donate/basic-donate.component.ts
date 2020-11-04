import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-basic-donate',
  templateUrl: './basic-donate.component.html',
  styleUrls: ['./basic-donate.component.scss']
})
export class BasicDonateComponent implements OnInit {
  is_login: boolean
  selectedItem: any
  type_donate:any
  
  constructor() {

    this.is_login = true;
  }

  ngOnInit(): void {
  }

  get_type(value:any){
    this.type_donate = value;
  }

  setDonate(){
    if(this.type_donate == null){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Selecciona tu referencia o tipo de donante!',
      })
    }
  }
}
