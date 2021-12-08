import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuarios } from '../entidades/usuarios';
import { TeoriaSistema } from '../entidades/teoriaSistema';
import { Observable } from 'rxjs';

export interface Post{
id?:string;
titulo:string;
descripcion:string;
}

@Injectable({
  providedIn: 'root',
})


export class PostService {

  constructor(private http: HttpClient) {}

  //Obtener todas las definiciones

  ObtenerTeorias() {
    return this.http.get('https://tp-backend-pp.herokuapp.com/Teoria_Sistema/lista');
  }

  //Crear Teoria 
  
  CrearTeoria(teoria:TeoriaSistema): Observable <any>{
    return this.http.post('https://tp-backend-pp.herokuapp.com/Teoria_Sistema/crear',teoria);
  }


  //Borrar Teoria por Id

  EliminarTeoria(teoria:TeoriaSistema) {

    const options = {
      
      body: {
        teoria
      }
    }
    return this.http.delete('https://tp-backend-pp.herokuapp.com/Teoria_Sistema/eliminar',options);
  }

  //Actualizar definicion

  ActualizarDefinicion(teoria:TeoriaSistema) {
    return this.http.put('https://tp-backend-pp.herokuapp.com/Teoria_Sistema/actualizar', teoria);
  }

  //Crear Usuarios
  
  CrearUsuario(usuarios: Usuarios): Observable <any>{
    return this.http.post('https://tp-backend-pp.herokuapp.com/usuarios/crear',usuarios);
  }

  //Buscar Usuarios

  BuscarUsuario(usuarios: Usuarios): Observable <any>{
    return this.http.post('https://tp-backend-pp.herokuapp.com/usuarios/buscar',usuarios);
  }
}
