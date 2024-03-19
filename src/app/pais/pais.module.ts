import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NombreComponent } from './pages/nombre/nombre.component';
import { RegionComponent } from './pages/region/region.component';
import { SubregionComponent } from './pages/subregion/subregion.component';
import { PaisTablaComponent } from '../shared/pais-tabla/pais-tabla.component';
import { PaisInformacionComponent } from './pages/pais-informacion/pais-informacion.component';
import { PaisRoutingModule } from './pais-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PaisPipe } from './pipes/pais.pipe';
import { PaisBuscarComponent } from '../shared/pais-buscar/pais-buscar.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { LoaderInterceptor } from '../shared/interceptors/loader.interceptor';



@NgModule({
  declarations: [
    NombreComponent,
    RegionComponent,
    SubregionComponent,
    PaisTablaComponent,
    PaisInformacionComponent,
    PaisPipe,
    PaisBuscarComponent
  ],
  imports: [
    CommonModule,
    PaisRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    PrimeNgModule,
    NgxUiLoaderModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }],
})
export class PaisModule { }
