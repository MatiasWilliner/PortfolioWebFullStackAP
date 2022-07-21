import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Form, NgForm } from '@angular/forms';

@Component({
  selector: 'app-exp-laboral',
  templateUrl: './exp-laboral.component.html',
  styleUrls: ['./exp-laboral.component.css']
})
export class ExpLaboralComponent implements OnInit {
  laboralList:any;
  deleteLaboral:any;
  editLaboral:any;

  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatosHistorialLaboral().subscribe(data =>{
      this.laboralList=data;
    })
  }

  public onOpenModal(mode:String, laboral?:any):void
{
  const container=document.getElementById('main-container');
  const button=document.createElement('button');
  button.style.display='none';
  button.setAttribute('data-toggle','modal');
  if(mode==='add')
  {
    button.setAttribute('data-target','#addLaboralModal');
  }
  else if(mode==='delete')
    {
      this.deleteLaboral=laboral;
      button.setAttribute('data-target','#deleteLaboralModal');
    }
    else if(mode==='edit')
    {
      this.editLaboral=laboral;
      button.setAttribute('data-target','#editLaboralModal')
    }
  container?.appendChild(button);
  button.click();
}

public onAddLaboral(addForm: NgForm)
{
  document.getElementById('add-laboral-form')?.click();
  this.datosPortfolio.agregarHistorialLaboral(addForm.value).subscribe({
    next:(response:any) =>{
      console.log(response);
      this.datosPortfolio.obtenerDatosHistorialLaboral().subscribe(data =>{
        this.laboralList=data;
      });
      addForm.resetForm();
    },
    error:(error:HttpErrorResponse)=>{
      alert(error.message);
      addForm.resetForm();
    }
  })
}

public onEditLaboral(laboral: any)
{
  this.editLaboral=laboral;
  document.getElementById('add-laboral-form')?.click();
  this.datosPortfolio.actualizarHistorialLaboral(laboral).subscribe({
    next:(response:any) =>{
      console.log(response);
      this.datosPortfolio.obtenerDatosHistorialLaboral().subscribe(data =>{
        this.laboralList=data;
      });
    },
    error:(error:HttpErrorResponse)=>{
      alert(error.message);
    }
  })
}

public onDeleteLaboral(idLaboral: number):void
{
  this.datosPortfolio.eliminarHistorialLaboral(idLaboral).subscribe({
    next:(response:void) =>{
      console.log(response);
      this.datosPortfolio.obtenerDatosHistorialLaboral().subscribe(data =>{
        this.laboralList=data;
      });
    },
    error:(error:HttpErrorResponse)=>{
      alert(error.message);
    }
  })
}

}
