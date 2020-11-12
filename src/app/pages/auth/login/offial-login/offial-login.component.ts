import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ApiConnectService } from '../../../../service/api-connect.service';
import * as bcrypt from 'bcryptjs';


@Component({
  selector: 'app-offial-login',
  templateUrl: './offial-login.component.html',
  styleUrls: ['./offial-login.component.scss']
})
export class OffialLoginComponent implements OnInit {
  user: any;
  submitted: boolean;

  constructor(private auth: ApiConnectService, public router: Router) {
    this.user = {
      email: "",
      password: ""
    }
  }

  ngOnInit() {
    document.querySelector('body').setAttribute('themebg-pattern', 'theme1');
  }

  login() {
    this.auth.login(this.user).subscribe(resp => {
      sessionStorage.setItem('session-data', JSON.stringify(resp))
      Swal.fire({
        title: "Inicio correcto",
        text: `Bienvenido a YEKSPLICES!`,
        timer: 500,
        icon: "success",
        showConfirmButton: false,
      });
      // window.location.reload()
      setTimeout(() => {
        this.router.navigate([`/pages/dashboard/${resp.uid}`])
      }, 450);
      this.auth.getStudentData(resp.uid).subscribe(respuesta => {
        bcrypt.genSalt(10, (err, salt)=> {
          bcrypt.hash(resp.uid, salt, (err, hash)=> {
            sessionStorage.setItem(hash, JSON.stringify(respuesta))
          });
        });
        console.log("Load data...")
      })
    })
    // sessionStorage.setItem('session-data', JSON.stringify(resp))

  }
}
