import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';

import { AlertController, NavController } from '@ionic/angular';
import Swal from 'sweetalert2';
import { PostService } from '../services/post.service';
import { Usuarios } from '../entidades/usuarios';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuarioActual: Usuarios;
  formulariologin: FormGroup;

  constructor(
    public fb: FormBuilder,
    public alertController: AlertController,
    public navCtrl: NavController,
    private servicioConsulta: PostService
  ) {
    this.formulariologin = this.fb.group({
      usuario: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });

    this.usuarioActual = new Usuarios();
  }

  ngOnInit() {}

  

  async ingresar() {
    if (this.formulariologin.invalid) {
      Swal.fire({
        icon: 'error',
        title: 'Datos Incorrectos...',
        text: ' Por favor ingrese los datos correctos',
        
      })
      return;
    } else {
      var formulario = this.formulariologin.value;

      (this.usuarioActual.usuario = formulario.usuario),
        (this.usuarioActual.password = formulario.password),
        this.servicioConsulta
          .BuscarUsuario(this.usuarioActual)
          .subscribe((res) => {
            console.log(res);

            if (res.length > 0) {
              this.navCtrl.navigateRoot('inicio');

              const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
              })
              
              Toast.fire({
                icon: 'success',
                title: 'Conectado Exitosamente!!!!'
              })

            } else {
            }
          });
    }
  }
}
