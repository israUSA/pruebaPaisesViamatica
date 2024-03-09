import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NombreComponent } from './pages/nombre/nombre.component';
import { RegionComponent } from './pages/region/region.component';
import { SubregionComponent } from './pages/subregion/subregion.component';
import { PaisTablaComponent } from './components/pais-tabla/pais-tabla.component';
import { PaisInformacionComponent } from './pages/pais-informacion/pais-informacion.component';
import { PaisRoutingModule } from './pais-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PaisBuscarComponent } from './components/pais-buscar/pais-buscar.component';
import { RouterModule } from '@angular/router';
import { PaisPipe } from './pipes/pais.pipe';



@NgModule({
  declarations: [
    NombreComponent,
    RegionComponent,
    SubregionComponent,
    PaisTablaComponent,
    PaisInformacionComponent,
    PaisBuscarComponent,
    PaisPipe
  ],
  imports: [
    CommonModule,
    PaisRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ]
})
export class PaisModule { }
