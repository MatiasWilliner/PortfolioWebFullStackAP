import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { ExpLaboralComponent } from './componentes/exp-laboral/exp-laboral.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PortfolioService } from './servicios/portfolio.service';
import { InterceptorService } from './servicios/interceptor.service';
import { BarraSuperiorComponent } from './componentes/barra-superior/barra-superior.component';
import { PieComponent } from './componentes/pie/pie.component';
import { PortfolioSoloVistaComponent } from './componentes/portfolio-solo-vista/portfolio-solo-vista.component';
import { EncabezadoSoloVistaComponent } from './componentes/encabezado-solo-vista/encabezado-solo-vista.component';
import { EducacionSoloVistaComponent } from './componentes/educacion-solo-vista/educacion-solo-vista.component';
import { LaboralSoloVistaComponent } from './componentes/laboral-solo-vista/laboral-solo-vista.component';
import { ExpLaboralSoloVistaComponent } from './componentes/exp-laboral-solo-vista/exp-laboral-solo-vista.component';
import { HabilidadesSoloVistaComponent } from './componentes/habilidades-solo-vista/habilidades-solo-vista.component';
import { ProyectosSoloVistaComponent } from './componentes/proyectos-solo-vista/proyectos-solo-vista.component';
import { BarraSuperiorIngresoComponent } from './componentes/barra-superior-ingreso/barra-superior-ingreso.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    ExpLaboralComponent,
    EducacionComponent,
    HabilidadesComponent,
    ProyectosComponent,
    IniciarSesionComponent,
    PortfolioComponent,
    BarraSuperiorComponent,
    PieComponent,
    PortfolioSoloVistaComponent,
    EncabezadoSoloVistaComponent,
    EducacionSoloVistaComponent,
    LaboralSoloVistaComponent,
    ExpLaboralSoloVistaComponent,
    HabilidadesSoloVistaComponent,
    ProyectosSoloVistaComponent,
    BarraSuperiorIngresoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [PortfolioService,{provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
