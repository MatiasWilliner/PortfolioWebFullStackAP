import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Form, NgForm } from '@angular/forms';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  //para databinding de interpolación(para cadenas solamente), es decir relacionar el html con los datos recibidos
  //para databinding de property(para asignar valores a las propiedades de los elementos HTML como el src de las imagenes)
  miPortfolio:any;
  editPersona:any;

  constructor(private datosPortfolio:PortfolioService) { }

  //Se suscribe a servicio para obtener datos y los muestra en consola
  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      this.miPortfolio=data[0];
    });
  }

  public onOpenModal(mode:String, persona?:any):void
{
  const container=document.getElementById('main-container');
  const button=document.createElement('button');
  button.style.display='none';
  button.setAttribute('data-toggle','modal');
  if(mode==='edit')
  {
    this.editPersona=persona;
    button.setAttribute('data-target','#editPersonaModal')
  }
  container?.appendChild(button);
  button.click();
}

public onEditPersona(persona: any)
{
  this.editPersona=persona;
  document.getElementById('add-persona-form')?.click();
  this.datosPortfolio.actualizarPersona(persona).subscribe({
    next:(response:any) =>{
      console.log(response);
      this.datosPortfolio.obtenerDatos().subscribe(data =>{
        this.miPortfolio=data[0];
      });
    },
    error:(error:HttpErrorResponse)=>{
      alert(error.message);
    }
  })
}

}
