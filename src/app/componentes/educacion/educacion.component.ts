import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css'],
})

export class EducacionComponent implements OnInit {
  educacionList:any;
  editEducacion:any | undefined;
  deleteEducacion:any | undefined;

  constructor(private datosPortfolio:PortfolioService ) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatosEducacion().subscribe(data =>{
      this.educacionList=data;
    })
  }

public onOpenModal(mode:String, educacion?:any):void
{
  const container=document.getElementById('main-container');
  const button=document.createElement('button');
  button.style.display='none';
  button.setAttribute('data-toggle','modal');
  if(mode==='add')
  {
    button.setAttribute('data-target','#addEducationModal');
  }
  else if(mode==='delete')
    {
      this.deleteEducacion=educacion;
      button.setAttribute('data-target','#deleteEducationModal');
    }
    else if(mode==='edit')
    {
      this.editEducacion=educacion;
      button.setAttribute('data-target','#editEducationModal')
    }
  container?.appendChild(button);
  button.click();
}

public onAddEducacion(addForm: NgForm)
{
  document.getElementById('add-education-form')?.click();
  this.datosPortfolio.agregarEducacion(addForm.value).subscribe({
    next:(response:any) =>{
      console.log(response);
      this.datosPortfolio.obtenerDatosEducacion().subscribe(data =>{
        this.educacionList=data;
      });
      addForm.resetForm();
    },
    error:(error:HttpErrorResponse)=>{
      alert(error.message);
      addForm.resetForm();
    }
  })
}

public onEditEducacion(educacion: any)
{
  this.editEducacion=educacion;
  document.getElementById('add-education-form')?.click();
  this.datosPortfolio.actualizarEducacion(educacion).subscribe({
    next:(response:any) =>{
      console.log(response);
      this.datosPortfolio.obtenerDatosEducacion().subscribe(data =>{
        this.educacionList=data;
      });
    },
    error:(error:HttpErrorResponse)=>{
      alert(error.message);
    }
  })
}

public onDeleteEducacion(idEducacion: number):void
{
  this.datosPortfolio.eliminarEducacion(idEducacion).subscribe({
    next:(response:void) =>{
      console.log(response);
      this.datosPortfolio.obtenerDatosEducacion().subscribe(data =>{
        this.educacionList=data;
      });
    },
    error:(error:HttpErrorResponse)=>{
      alert(error.message);
    }
  })
}

  
}
