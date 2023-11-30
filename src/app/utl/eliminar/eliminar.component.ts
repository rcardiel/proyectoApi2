import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AlumnosUtl } from 'src/app/interfaces/utl.Interface';
import { ProyectoApiService } from 'src/app/proyecto-api.service';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css']
})
export class EliminarComponent {
  dataSource:any=[];
  tem:any;
 regAlumno:AlumnosUtl={
   matricula:0,
   nombre:'',
   apaterno:'',
   amaterno:'',
   correo:''
 }
 constructor(private location: Location,public alumnosUtl:ProyectoApiService, private router:Router){}

 ngOnInit(): void {
    this.tem = this.location.path().split('/')
   this.alumnosUtl.getAlumno(parseInt(this.tem[2])).subscribe(
     {
       next: response=>{

     this.dataSource=response;
         console.log(this.dataSource)
         this.asignaCampos(this.dataSource)

   },
   error: error=>console.log(error)
 }
   );
 }

 asignaCampos(dataSource:any){
    this.regAlumno.matricula=dataSource.alumno.matricula
    this.regAlumno.nombre=dataSource.alumno.nombre
    this.regAlumno.apaterno=dataSource.alumno.apaterno
    this.regAlumno.amaterno=dataSource.alumno.amaterno
    this.regAlumno.correo=dataSource.alumno.correo
    console.log(dataSource.alumno.matricula)
 }

 eliminar(){
   this.alumnosUtl.EliminaAlumno(this.tem[2]).subscribe({
     next:()=>console.log(),
     error:(e)=> console.error(e),
     complete:()=>console.info()})

     this.router.navigate(['verAlumnos'])

 }



}
