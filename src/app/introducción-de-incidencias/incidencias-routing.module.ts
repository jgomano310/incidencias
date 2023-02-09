import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { CrearComponent } from './crear/crear.component';
import { ListarComponent } from './listar/listar.component';

const routes: Routes = [

  {
   path:'', component:ListarComponent
    
  },
  {
    path:'crear',component:CrearComponent

  },

  {
    path:'listar',component:ListarComponent

  }


];

@NgModule({

  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class IncidenciasRoutingModule { }
