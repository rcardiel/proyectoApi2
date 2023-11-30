import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlumnosUtl } from './interfaces/utl.Interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProyectoApiService {

  private _alumnosUtl:AlumnosUtl[]=[
    {
      matricula:1234,
      nombre:'pedro',
      apaterno:'lopez',
      amaterno:'muñoz',
      correo: 'pedro@gmail.com',

    },
    {
      matricula:772,
      nombre:'Paulina',
      apaterno:'lopez',
      amaterno:'muñoz',
      correo: 'paulina@gmail.com',
    },

    {
      matricula:22,
      nombre:'Dario',
      apaterno:'lopez',
      amaterno:'muñoz',
      correo: 'dario@gmail.com',

    },
  ]

  constructor(private http:HttpClient) { }

get alumnos():AlumnosUtl[]{
  return[...this._alumnosUtl]
}

public getAlumnos():Observable<AlumnosUtl[]>{
  return this.http.get<AlumnosUtl[]>('http://127.0.0.1:5000/alumnos')
}

agregarNuevoAlumno(datos:AlumnosUtl){
  return this.http.post('http://127.0.0.1:5000/alumnos',datos)
}

public getAlumno(mat:number):Observable<AlumnosUtl>{
  return this.http.get<AlumnosUtl>('http://127.0.0.1:5000/alumnos/'+mat)
}

modificarAlumno(mat:number,datos:AlumnosUtl){
  return this.http.put('http://127.0.0.1:5000/alumnos/'+mat,datos)
}
public EliminaAlumno(mat:number):Observable<AlumnosUtl>{
  return this.http.delete<AlumnosUtl>('http://127.0.0.1:5000/alumnos/'+mat)
}

}
