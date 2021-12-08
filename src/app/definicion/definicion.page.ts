import { Component, OnInit } from '@angular/core';
import { PostService, Post } from '../services/post.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TeoriaSistema } from '../entidades/teoriaSistema';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-definicion',
  templateUrl: './definicion.page.html',
  styleUrls: ['./definicion.page.scss'],
})
export class DefinicionPage implements OnInit {

  darkMode: boolean = true;

  teoriaCrear:TeoriaSistema= new TeoriaSistema();
  
  constructor(
    private servicioConsulta: PostService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {}

  cambio() {
    this.darkMode = !this.darkMode;
    document.body.classList.toggle('dark');
  }

  guardarTeoriaCreada(){

    this.servicioConsulta
    .CrearTeoria(this.teoriaCrear)
    .subscribe((res) => {
      console.log(res);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'La teoria se ha guardado correctamente en la base de datos!!!',
        showConfirmButton: false,
        timer: 3500
      })
      this.router.navigate(['/inicio']);
    });
  }

 
}
