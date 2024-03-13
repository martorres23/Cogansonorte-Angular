import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LightboxModule } from 'ngx-lightbox';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FooterComponent } from './footer/footer.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavComponent } from './nav/nav.component';
import { ProductosComponent } from './productos/productos.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { SlidesComponent } from './slides/slides.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactoComponent,
    FooterComponent,
    GaleriaComponent,
    InicioComponent,
    NavComponent,
    ProductosComponent,
    ServiciosComponent,
    SlidesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LightboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
