import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import {PortfolioSoloVistaComponent} from './componentes/portfolio-solo-vista/portfolio-solo-vista.component';
import { GuardGuard } from './servicios/guard.guard';

const routes:Routes=[
  {path:'portfolio',component:PortfolioComponent, canActivate:[GuardGuard]},
  {path:'iniciar-sesion',component:IniciarSesionComponent},
  {path:'',redirectTo:'portfolio-solo-vista',pathMatch:'full'},
  {path:'portfolio-solo-vista', component:PortfolioSoloVistaComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
