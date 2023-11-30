import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlumnosUtl } from 'src/app/interfaces/utl.Interface';
import { ProyectoApiService } from 'src/app/proyecto-api.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {
  regAlumno:AlumnosUtl={
    matricula:0,
    nombre:'',
    apaterno:'',
    amaterno:'',
    correo:''
  }

  constructor(private alumnosutl:ProyectoApiService, private router:Router){}

  agregar(){
    this.alumnosutl.agregarNuevoAlumno(this.regAlumno).subscribe({
      next:()=>console.log(),
      error:(e)=> console.error(e),
      complete:()=>console.info()})

      this.regAlumno={
        matricula:0,
        nombre:'',
        apaterno:'',
        amaterno:'',
        correo:''
      }

      this.router.navigate(['verAlumnos'])

  }

}
