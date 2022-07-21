import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  url:string="http://localhost:8080/";
  constructor(private http:HttpClient) { }

  //obtener datos. En este caso de un json data(cuando tenga la base de datos sería la dirección de la misma). Observable es para que se llame cuando se quiera
  obtenerDatos():Observable<any>{
    return this.http.get(this.url+"ver/personas")
  }
  obtenerDatosEducacion():Observable<any>{
    return this.http.get(this.url+"ver/educacion")
  }
  obtenerDatosProyecto():Observable<any>{
    return this.http.get(this.url+"ver/proyecto")
  }
  obtenerDatosHistorialLaboral():Observable<any>{
    return this.http.get(this.url+"ver/laboral")
  }
  obtenerDatosHabilidades():Observable<any>{
    return this.http.get(this.url+"ver/habilidad")
  }
  //se podrian hacer los modelos en esta parte para luego usarlos en lugar de any
  agregarEducacion(educacion:any):Observable<any>{
    console.log(educacion);
    return this.http.post(this.url+"new/educacion",educacion);
  }

  actualizarEducacion(educacion:any):Observable<any>{
    return this.http.put(this.url+"edit/educacion",educacion)
  }

  eliminarEducacion(id:number):Observable<void>{
    return this.http.delete<void>(this.url+`delete/educacion/${id}`)
  }

  agregarHabilidad(habilidad:any):Observable<any>{
    console.log(habilidad);
    return this.http.post(this.url+"new/habilidad",habilidad);
  }

  actualizarHabilidad(habilidad:any):Observable<any>{
    return this.http.put(this.url+"edit/habilidad",habilidad)
  }

  eliminarHabilidad(id:number):Observable<void>{
    return this.http.delete<void>(this.url+`delete/habilidad/${id}`)
  }

  agregarHistorialLaboral(laboral:any):Observable<any>{
    console.log(laboral);
    return this.http.post(this.url+"new/laboral",laboral);
  }

  actualizarHistorialLaboral(laboral:any):Observable<any>{
    return this.http.put(this.url+"edit/laboral",laboral)
  }

  eliminarHistorialLaboral(id:number):Observable<void>{
    return this.http.delete<void>(this.url+`delete/laboral/${id}`)
  }

  agregarProyecto(proyecto:any):Observable<any>{
    console.log(proyecto);
    return this.http.post(this.url+"new/proyecto",proyecto);
  }

  actualizarProyecto(proyecto:any):Observable<any>{
    return this.http.put(this.url+"edit/proyecto",proyecto)
  }

  eliminarProyecto(id:number):Observable<void>{
    return this.http.delete<void>(this.url+`delete/proyecto/${id}`)
  }

  actualizarPersona(persona:any):Observable<any>{
    return this.http.put(this.url+"edit/persona",persona)
  }

}
