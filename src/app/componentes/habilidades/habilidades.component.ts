import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Form, NgForm } from '@angular/forms';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  habilidadList:any;
  deleteHabilidad:any;
  editHabilidad:any;

  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatosHabilidades().subscribe(data =>{
      this.habilidadList=data;
    })
  }

  public onOpenModal(mode:String, habilidad?:any):void
{
  const container=document.getElementById('main-container');
  const button=document.createElement('button');
  button.style.display='none';
  button.setAttribute('data-toggle','modal');
  if(mode==='add')
  {
    button.setAttribute('data-target','#addHabilidadModal');
  }
  else if(mode==='delete')
    {
      this.deleteHabilidad=habilidad;
      button.setAttribute('data-target','#deleteHabilidadModal');
    }
    else if(mode==='edit')
    {
      this.editHabilidad=habilidad;
      button.setAttribute('data-target','#editHabilidadModal')
    }
  container?.appendChild(button);
  button.click();
}

public onAddHabilidad(addForm: NgForm)
{
  document.getElementById('add-habilidad-form')?.click();
  this.datosPortfolio.agregarHabilidad(addForm.value).subscribe({
    next:(response:any) =>{
      console.log(response);
      this.datosPortfolio.obtenerDatosHabilidades().subscribe(data =>{
        this.habilidadList=data;
      });
      addForm.resetForm();
    },
    error:(error:HttpErrorResponse)=>{
      alert(error.message);
      addForm.resetForm();
    }
  })
}

public onEditHabilidad(habilidad: any)
{
  this.editHabilidad=habilidad;
  document.getElementById('add-habilidad-form')?.click();
  this.datosPortfolio.actualizarHabilidad(habilidad).subscribe({
    next:(response:any) =>{
      console.log(response);
      this.datosPortfolio.obtenerDatosHabilidades().subscribe(data =>{
        this.habilidadList=data;
      });
    },
    error:(error:HttpErrorResponse)=>{
      alert(error.message);
    }
  })
}

public onDeleteHabilidad(idHabilidad: number):void
{
  this.datosPortfolio.eliminarHabilidad(idHabilidad).subscribe({
    next:(response:void) =>{
      console.log(response);
      this.datosPortfolio.obtenerDatosHabilidades().subscribe(data =>{
        this.habilidadList=data;
      });
    },
    error:(error:HttpErrorResponse)=>{
      alert(error.message);
    }
  })
}

}
