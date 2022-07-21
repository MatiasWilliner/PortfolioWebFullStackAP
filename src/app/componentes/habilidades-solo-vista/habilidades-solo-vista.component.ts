import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-habilidades-solo-vista',
  templateUrl: './habilidades-solo-vista.component.html',
  styleUrls: ['./habilidades-solo-vista.component.css']
})
export class HabilidadesSoloVistaComponent implements OnInit {

  habilidadList:any;

  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatosHabilidades().subscribe(data =>{
      this.habilidadList=data;
    })
  }

}
