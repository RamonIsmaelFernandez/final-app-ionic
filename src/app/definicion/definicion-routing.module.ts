import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefinicionPage } from './definicion.page';

const routes: Routes = [
  {
    path: '',
    component: DefinicionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DefinicionPageRoutingModule {}
