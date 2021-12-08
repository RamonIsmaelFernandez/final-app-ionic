import { Component } from '@angular/core';
import { PostService } from '../services/post.service';
import { AlertController } from '@ionic/angular';
import { TeoriaSistema } from '../entidades/teoriaSistema';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage {
  darkMode: boolean = false;
  listaTeorias!: Array<TeoriaSistema>;

  constructor(
    private servicioConsulta: PostService,
    private alertController: AlertController
  ) {
    this.servicioConsulta.ObtenerTeorias().subscribe((res: any) => {
      this.listaTeorias = res;
    });
  }

  cambio() {
    this.darkMode = !this.darkMode;
    document.body.classList.toggle('dark');
  }

  editarTeoria(Teoria: TeoriaSistema) {
    this.cambiarEstado(Teoria);
  }

  editarGuardarTeoria(Teoria: TeoriaSistema) {
    this.servicioConsulta.ActualizarDefinicion(Teoria).subscribe((res) => {
      console.log(res);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title:
          'La teoria editada ha sido guardada correctamente en la base de datos!!!',
        showConfirmButton: false,
        timer: 3500,
      });
    });

    this.cambiarEstado(Teoria);
  }

  EliminarTeoria(teoria: TeoriaSistema) {
    this.servicioConsulta.EliminarTeoria(teoria).subscribe((res) => {
      console.log(res);

      Swal.fire({
        title: 'Estas seguro de eliminar la teoria?',
        icon: 'warning',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Eliminar',
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire('Eliminado!', 'Tu teoria ha sido eliminada.', 'success');
        }
      });
    });

    this.recargarLista();
  }

  cambiarEstado(Teoria: TeoriaSistema) {
    if (
      Teoria.estadoModificacion == false ||
      Teoria.estadoModificacion == null
    ) {
      Teoria.estadoModificacion = true;
    } else {
      Teoria.estadoModificacion = false;
    }
  }

  recargarLista() {
    this.servicioConsulta.ObtenerTeorias().subscribe((res: any) => {
      this.listaTeorias = res;
    });
  }

  doRefresh(event) {
    
    this.servicioConsulta.ObtenerTeorias().subscribe((res: any) => {
      this.listaTeorias = res;
    })

    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }
}
