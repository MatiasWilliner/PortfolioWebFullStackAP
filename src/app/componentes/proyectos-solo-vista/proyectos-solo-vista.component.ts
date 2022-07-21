import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-proyectos-solo-vista',
  templateUrl: './proyectos-solo-vista.component.html',
  styleUrls: ['./proyectos-solo-vista.component.css']
})
export class ProyectosSoloVistaComponent implements OnInit {
  proyectosList:any;
  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatosProyecto().subscribe(data =>{
      this.proyectosList=data;
    })
  }

}
