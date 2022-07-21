import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-educacion-solo-vista',
  templateUrl: './educacion-solo-vista.component.html',
  styleUrls: ['./educacion-solo-vista.component.css']
})
export class EducacionSoloVistaComponent implements OnInit {

  educacionList:any;

  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatosEducacion().subscribe(data =>{
      this.educacionList=data;
    })
  }

}
