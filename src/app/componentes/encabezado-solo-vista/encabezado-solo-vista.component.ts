import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-encabezado-solo-vista',
  templateUrl: './encabezado-solo-vista.component.html',
  styleUrls: ['./encabezado-solo-vista.component.css']
})
export class EncabezadoSoloVistaComponent implements OnInit {
  miPortfolio:any;
  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      this.miPortfolio=data[0];
    });
  }

}
