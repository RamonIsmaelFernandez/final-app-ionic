export class TeoriaSistema {

  id: string;
  titulo: string;
  descripcion: string;
  imagen: string;
  estadoModificacion:boolean;


  constructor() {
      
    this.id="default";
    this.titulo = '';
    this.descripcion = '';
    this.imagen = '';
    this.estadoModificacion=false;
  }
}
