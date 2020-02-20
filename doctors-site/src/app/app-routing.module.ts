import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SubnavComponent } from './subnav/subnav.component';
import { EditpatientdetailsComponent } from './editpatientdetails/editpatientdetails.component';
import { EditClinicalConditionsComponent } from './edit-clinical-conditions/edit-clinical-conditions.component';
import { EditpicComponent } from './editpic/editpic.component';
import { CarrouselComponent } from './carrousel/carrousel.component';


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'subnav',component:SubnavComponent},
  {path:'editpatient',component:EditpatientdetailsComponent},
  {path:'edit/:firstname',component:EditpicComponent},
  {path:'editclinic',component:EditClinicalConditionsComponent},
  {path:'editpic',component:EditpicComponent},
  {path:'car',component:CarrouselComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
