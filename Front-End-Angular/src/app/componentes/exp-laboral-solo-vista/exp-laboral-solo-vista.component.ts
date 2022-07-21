import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-exp-laboral-solo-vista',
  templateUrl: './exp-laboral-solo-vista.component.html',
  styleUrls: ['./exp-laboral-solo-vista.component.css']
})
export class ExpLaboralSoloVistaComponent implements OnInit {

  laboralList:any;
  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatosHistorialLaboral().subscribe(data =>{
      this.laboralList=data;
    })
  }

}
