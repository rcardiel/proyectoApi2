import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { AlumnosUtl } from 'src/app/interfaces/utl.Interface';
import { ProyectoApiService } from 'src/app/proyecto-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
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
  modificar(){
    this.alumnosUtl.modificarAlumno(this.tem[2],this.regAlumno).subscribe({
      next:()=>console.log(),
      error:(e)=> console.error(e),
      complete:()=>console.info()})

      this.router.navigate(['verAlumnos'])

  }


}
