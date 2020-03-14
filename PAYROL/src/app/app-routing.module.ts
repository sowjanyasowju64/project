import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';

import { LoginComponent } from './login/login.component';
import { HomeTabsComponent } from './home-tabs/home-tabs.component';
import { JoiningTabsComponent } from './joining-tabs/joining-tabs.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { AttendenceComponent } from './attendence/attendence.component';
import { AcceptanceComponent } from './acceptance/acceptance.component';
import { EducationComponent } from './education/education.component';
import { SecondComponent } from './second/second.component';
import { PayslipComponent } from './payslip/payslip.component';
import { SalaryComponent } from './salary/salary.component';
import { SalaryGroupComponent } from './salary-group/salary-group.component';
import { SalaryShowComponent } from './salary-show/salary-show.component';
import { FormulaSalaryComponent } from './formula-salary/formula-salary.component';
import { MapsComponent } from './maps/maps.component';
import { HolidaylistComponent } from './holidaylist/holidaylist.component';
import { ApprisalComponent } from './apprisal/apprisal.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ShowEmployeeComponent } from './show-employee/show-employee.component';
import { HRDetailsComponent } from './hr-details/hr-details.component';


import { ShowEmployee1Component } from './show-employee1/show-employee1.component';
import { WorkpatternComponent } from './workpattern/workpattern.component';
import { PersonalComponent } from './personal/personal.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminRegistrationComponent } from './admin-registration/admin-registration.component';
import { AdminForgotpasswordComponent } from './admin-forgotpassword/admin-forgotpassword.component';


const routes: Routes = [
  {path:"home", component:HomeTabsComponent},
  {path:'navigation',component:NavigationComponent},
  {path:'login',component:LoginComponent},
  {path:'home-tabs',component:HomeTabsComponent},
  {path:'joining-tabs',component:JoiningTabsComponent},
  {path:'personal-details',component:PersonalDetailsComponent},
  {path:'attendence',component:AttendenceComponent},
  {path:'acceptance',component:AcceptanceComponent},
  {path:'education', component:EducationComponent},
  {path:'second',component:SecondComponent},
  {path:'payslip',component:PayslipComponent},
  {path:'salary', component:SalaryComponent},
  {path:'salary-group', component:SalaryGroupComponent},
  {path:'payslip1', component:SalaryShowComponent},
  {path:'formula-salary',component:FormulaSalaryComponent},
  {path:'maps', component:MapsComponent},
  {path:'holidays', component:HolidaylistComponent},
  {path:'apprisal', component:ApprisalComponent},
  {path:'appointment',component:AppointmentComponent},
  {path:'forgotpassword',component:ForgotPasswordComponent},
  {path:'addemployee',component:AddEmployeeComponent},
  {path:'showemployee',component:ShowEmployeeComponent},
  {path:'showemployee1',component:ShowEmployee1Component},
  {path:'hr-details',component:HRDetailsComponent},
  {path:'11',component:PersonalComponent},
  {path:'',component:AdminLoginComponent},
  {path:'Admin-login',component:AdminLoginComponent},
  {path:'Admin-registration',component:AdminRegistrationComponent},
  {path:'Admin-forgot',component:AdminForgotpasswordComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
