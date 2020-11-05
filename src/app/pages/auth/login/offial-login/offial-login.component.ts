import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ApiConnectService } from '../../../../service/api-connect.service';

@Component({
  selector: 'app-offial-login',
  templateUrl: './offial-login.component.html',
  styleUrls: ['./offial-login.component.scss']
})
export class OffialLoginComponent implements OnInit {
  user: any;
  submitted: boolean;

  constructor(private auth: ApiConnectService, public router: Router ) {
    this.user = {
      email: "",
      password:""
    }
  }

  ngOnInit() {
    document.querySelector('body').setAttribute('themebg-pattern', 'theme1');
  }

  login() {
    // sessionStorage.setItem('session-data', JSON.stringify(resp))
    Swal.fire({
      title: "Inicio correcto",
      text: `Bienvenido Faustino!`,
      timer: 1000,
      icon: "success",
      showConfirmButton: false,
    });
    window.location.reload()
    setTimeout(() => {
      this.router.navigate(['/dashboard'])
      // this.dialogRef.close();
    }, 1000);

  }
}
