import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NombreComponent } from './pages/nombre/nombre.component';
import { RegionComponent } from './pages/region/region.component';
import { SubregionComponent } from './pages/subregion/subregion.component';
import { PaisInformacionComponent } from './pages/pais-informacion/pais-informacion.component';

const routes: Routes = [
  
  {
    path:'',
    children:[
      {
        path:'nombre',
        title:'Buscar por Nombre',
        component: NombreComponent
      },
      {
        path:'region',
        title:'Buscar por Region',
        component: RegionComponent
      },
      {
        path:'subregion',
        title:'Buscar por Subregion',
        component: SubregionComponent
      },
      {
        path:':id',
        title:'Informacion',
        component: PaisInformacionComponent
      },

      {
        path:'**',
        redirectTo:'nombre'
      },
    ]
  }

]



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class PaisRoutingModule { }
