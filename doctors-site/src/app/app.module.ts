import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SubnavComponent } from './subnav/subnav.component';
import { EditpatientdetailsComponent } from './editpatientdetails/editpatientdetails.component';
import { EditClinicalConditionsComponent } from './edit-clinical-conditions/edit-clinical-conditions.component';
import { EditpicComponent } from './editpic/editpic.component';
import { CarrouselComponent } from './carrousel/carrousel.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PatientsService } from './patients.service';
import { EditpatientComponent } from './editpatient/editpatient.component';
import { PatientFilterPipe } from './patient.filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    SubnavComponent,
    EditpatientdetailsComponent,
    EditClinicalConditionsComponent,
    EditpicComponent,
    CarrouselComponent,
    EditpatientComponent,
    PatientFilterPipe
   
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [PatientsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
