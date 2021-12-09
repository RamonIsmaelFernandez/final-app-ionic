import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';


@Component({
  selector: 'app-galeria-imagenes',
  templateUrl: './galeria-imagenes.page.html',
  styleUrls: ['./galeria-imagenes.page.scss'],
})
export class GaleriaImagenesPage implements OnInit {

 
  
  slides = [
    {
      img: 'assets/1.jpg',
      titulo: 'Diseño en Construcciones',
    },
    {
      img: 'assets/2.jpg',
      titulo: 'Planos Garantizados',
    },
    {
      img: 'assets/3.png',
      titulo: 'Toma de Decisiones',
    },
    {
      img: 'assets/4.jfif',
      titulo: 'Decibelimetro',
    },
    {
      img: 'assets/5.jpg',
      titulo: 'Matafuego y sus partes',
    },
    {
      img: 'assets/6.jfif',
      titulo: 'Luxometro',
    },
    {
      img: 'assets/7.jpg',
      titulo: 'Elementos de seguridad en el trabajo',
    },
    {
      img: 'assets/8.jfif',
      titulo: 'Seguridad e Higiene en el trabajo',
    },
  ];
  
  constructor(private browser:InAppBrowser) {}

  noticias: any = [
    {
      titulo:'INFORMACIÓN INGRESANTES 2022',
      descripcion:'Una vez realizada la inscripción personal y adquirida la Libreta Estudiantil y Tarjeta Magnética debe cumplimentar algunos pasos necesarios para perfeccionar su inscripción.',
      img: 'https://alumnos.ibeltran.com.ar/files-cartelera/20211130143703.jpeg',
      url:'https://alumnos.ibeltran.com.ar/'
    },
    {
      titulo:'IMPORTANTE - ATENCIÓN DEL DEPARTAMENTO DE ALUMNOS-SUSPENDIDA',
      descripcion:'DEBIDO A QUE EL PERSONAL SE ENCONTRARÁ AFECTADO A LAS INSCRIPCIONES A CARRERAS, DESDE EL 01/12 Y HASTA EL 15/12 INCLUSIVE,LA ATENCIÓN DEL DEPARTAMENTO DE ALUMNOS SE ENCONTRARÁ SUSPENDIDA',
      img: 'https://alumnos.ibeltran.com.ar/files-cartelera/20211130200821.jpeg',
      url:'https://alumnos.ibeltran.com.ar/'
    }
  ]

  openUrl(url:string, target:string){
    const link = url
    this.browser.create(link, target)
  }
  ngOnInit() {}
}
