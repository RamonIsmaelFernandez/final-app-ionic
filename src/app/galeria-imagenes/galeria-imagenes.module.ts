import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GaleriaImagenesPageRoutingModule } from './galeria-imagenes-routing.module';

import { GaleriaImagenesPage } from './galeria-imagenes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GaleriaImagenesPageRoutingModule
  ],
  declarations: [GaleriaImagenesPage]
})
export class GaleriaImagenesPageModule {}
