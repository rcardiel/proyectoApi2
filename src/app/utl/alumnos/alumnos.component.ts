import { Component, OnInit } from '@angular/core';
import { AlumnosUtl } from 'src/app/interfaces/utl.Interface';
import { ProyectoApiService } from 'src/app/proyecto-api.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

  imageWidth:number=50;
  imageMargin:number=2;
  muestraImg:boolean=true;
  listFilter:string=''
  alumnoTitle!:string
  dataSource:any=[];
  constructor(public alumnosUtl:ProyectoApiService){}

  showImage():void{
    this.muestraImg=!this.muestraImg;
  }

  alumnosIric:AlumnosUtl[]=[
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

  onCalificaClick(message:string){
    this.alumnoTitle=` ${message}`;

  }
  ngOnInit(): void {
    this.alumnosUtl.getAlumnos().subscribe(
      {
        next: response=>{

      this.dataSource=response;

    },
    error: error=>console.log(error)
  }
    );
}

}
