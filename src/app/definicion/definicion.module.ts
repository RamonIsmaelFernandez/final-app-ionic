import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DefinicionPageRoutingModule } from './definicion-routing.module';

import { DefinicionPage } from './definicion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DefinicionPageRoutingModule
  ],
  declarations: [DefinicionPage]
})
export class DefinicionPageModule {}
