import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Form, NgForm } from '@angular/forms';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyectosList:any;
  deleteProyecto:any;
  editProyecto:any;

  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatosProyecto().subscribe(data =>{
      this.proyectosList=data;
    })
  }

  public onOpenModal(mode:String, proyecto?:any):void
{
  const container=document.getElementById('main-container');
  const button=document.createElement('button');
  button.style.display='none';
  button.setAttribute('data-toggle','modal');
  if(mode==='add')
  {
    button.setAttribute('data-target','#addProyectoModal');
  }
  else if(mode==='delete')
    {
      this.deleteProyecto=proyecto;
      button.setAttribute('data-target','#deleteProyectoModal');
    }
    else if(mode==='edit')
    {
      this.editProyecto=proyecto;
      button.setAttribute('data-target','#editProyectoModal')
    }
  container?.appendChild(button);
  button.click();
}

public onAddProyecto(addForm: NgForm)
{
  document.getElementById('add-proyecto-form')?.click();
  this.datosPortfolio.agregarProyecto(addForm.value).subscribe({
    next:(response:any) =>{
      console.log(response);
      this.datosPortfolio.obtenerDatosProyecto().subscribe(data =>{
        this.proyectosList=data;
      });
      addForm.resetForm();
    },
    error:(error:HttpErrorResponse)=>{
      alert(error.message);
      addForm.resetForm();
    }
  })
}

public onEditProyecto(proyecto: any)
{
  this.editProyecto=proyecto;
  document.getElementById('add-proyecto-form')?.click();
  this.datosPortfolio.actualizarProyecto(proyecto).subscribe({
    next:(response:any) =>{
      console.log(response);
      this.datosPortfolio.obtenerDatosProyecto().subscribe(data =>{
        this.proyectosList=data;
      });
    },
    error:(error:HttpErrorResponse)=>{
      alert(error.message);
    }
  })
}

public onDeleteProyecto(idProyecto: number):void
{
  this.datosPortfolio.eliminarProyecto(idProyecto).subscribe({
    next:(response:void) =>{
      console.log(response);
      this.datosPortfolio.obtenerDatosProyecto().subscribe(data =>{
        this.proyectosList=data;
      });
    },
    error:(error:HttpErrorResponse)=>{
      alert(error.message);
    }
  })
}

}
