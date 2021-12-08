import { Component, OnInit } from '@angular/core';


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
  
  constructor() {}

  
  ngOnInit() {}
}
