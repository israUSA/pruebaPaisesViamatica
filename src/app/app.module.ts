import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaisModule } from './pais/pais.module';
import { SideMenuComponent } from './shared/side-menu/side-menu.component';
import { FormsModule } from '@angular/forms';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderInterceptor } from './shared/interceptors/loader.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PaisModule,
    FormsModule,
    AppRoutingModule,
    PrimeNgModule,
    NgxUiLoaderModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
