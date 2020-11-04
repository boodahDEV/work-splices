import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-basic-unirme',
  templateUrl: './basic-unirme.component.html',
  styleUrls: ['./basic-unirme.component.scss']
})
export class BasicUnirmeComponent implements OnInit {
  is_login: boolean
  selectedItem: any
  user_data: any
  constructor(   
     protected dialogRef: NbDialogRef<any>,
    ) {
    if (sessionStorage || this.is_login == null) {
      setTimeout(() => {
        for (const key in sessionStorage) {
          if (sessionStorage.hasOwnProperty(key) && key === "session-data") {
            this.user_data = JSON.parse(sessionStorage.getItem("session-data"));
            this.is_login = true
            console.log(this.user_data)
          } else {
            this.is_login = false;
            console.log("false")
          }
        }
        if (this.is_login == false) {
          this.dialogRef.close();
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Debes iniciar sesion para poder unirte!',
          })
        }
      }, 320)
    }
  }

  ngOnInit(): void {
  }

  join_project(){
    
  }

}
