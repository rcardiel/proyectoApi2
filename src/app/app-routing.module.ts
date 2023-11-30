import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnosComponent } from './utl/alumnos/alumnos.component';
import { HomeComponent } from './home/home.component';
import { AgregarComponent } from './utl/agregar/agregar.component';
import { EditarComponent } from './utl/editar/editar.component';
import { EliminarComponent } from './utl/eliminar/eliminar.component';

const routes: Routes = [
  {path: '',redirectTo: '/home', pathMatch:'full'},
  {path:'home',component: HomeComponent},
  {path:'Agregar', component: AgregarComponent},
  {path:'Eliminar/:matricula', component: EliminarComponent},
  {path: 'verAlumnos',component: AlumnosComponent },
  {path: 'Editar/:matricula',component: EditarComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
