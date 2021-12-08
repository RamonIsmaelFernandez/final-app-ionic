import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder

} from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
import { PostService } from '../services/post.service';
import { Usuarios } from '../entidades/usuarios';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formularioRegistro: FormGroup;
  usuarioActual: Usuarios;

  constructor(public fb: FormBuilder, public alertController: AlertController, public navCtrl: NavController, private servicioConsulta: PostService) {
    this.formularioRegistro = this.fb.group({
      'usuario': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required)
    });

    this.usuarioActual = new Usuarios();

  }
  ngOnInit() {

  }
  async guardar() {

    if (this.formularioRegistro.invalid) {
      Swal.fire({
        icon: 'error',
        title: 'Datos Incorrectos...',
        text: ' Por favor ingrese los datos correctos',
        
      })
     return;

    }else{     
      await this.registrarUsuario();
    }

  }

registrarUsuario(){

  var formulario = this.formularioRegistro.value;
  console.log(formulario.usuario);

  this.usuarioActual.usuario =  formulario.usuario,
  this.usuarioActual.password =  formulario.password,

  this.servicioConsulta.CrearUsuario(this.usuarioActual).
    subscribe(res =>{ console.log(res)
  });

    localStorage.setItem('token' , "Valido");

    //Si nuestras credenciales son correctas nos manda al la pagina de inicio

    this.navCtrl.navigateRoot('login');

    Swal.fire({
      title: 'Registrado en la base de datos correctamente!!!!',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })

}


}



