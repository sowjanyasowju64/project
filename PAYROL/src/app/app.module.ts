import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AgmCoreModule } from '@agm/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';
import {A11yModule} from '@angular/cdk/a11y';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { NavigationComponent } from './navigation/navigation.component';

import { SecondComponent } from './second/second.component';
import { HttpClientModule, HttpClientJsonpModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { HomeTabsComponent } from './home-tabs/home-tabs.component';
import { JoiningTabsComponent } from './joining-tabs/joining-tabs.component';
import { FamilyComponent } from './family/family.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { BankComponent } from './bank/bank.component';
import { EducationComponent } from './education/education.component';
import { AttendenceComponent } from './attendence/attendence.component';
import { PreviousEmployeementComponent } from './previous-employeement/previous-employeement.component';


import {DatePipe} from '@angular/common';
import { MedicalDeclarationComponent } from './medical-declaration/medical-declaration.component';
import { AcceptanceComponent } from './acceptance/acceptance.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PoliciesComponent } from './policies/policies.component';
import { ITDeclarationComponent } from './it-declaration/it-declaration.component';
import { PayslipComponent } from './payslip/payslip.component';
import { FinancialYearComponent } from './financial-year/financial-year.component';
import { YearpayslipComponent } from './yearpayslip/yearpayslip.component';
import { SalaryComponent } from './salary/salary.component';
import { SalaryGroupComponent } from './salary-group/salary-group.component';
import { SalaryShowComponent } from './salary-show/salary-show.component';
import { FormulaSalaryComponent } from './formula-salary/formula-salary.component';
import { MapsComponent } from './maps/maps.component';
import { from } from 'rxjs';
import { BranchComponent } from './branch/branch.component';
import { HolidaylistComponent } from './holidaylist/holidaylist.component';
import { ApprisalComponent } from './apprisal/apprisal.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ShowEmployeeComponent } from './show-employee/show-employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { HRDetailsComponent } from './hr-details/hr-details.component';


import { ShowEmployee1Component } from './show-employee1/show-employee1.component';
import { GeneralComponent } from './general/general.component';
import { WorkpatternComponent } from './workpattern/workpattern.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { PersonalComponent } from './personal/personal.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminRegistrationComponent } from './admin-registration/admin-registration.component';
import { AdminForgotpasswordComponent } from './admin-forgotpassword/admin-forgotpassword.component';





@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
 
    SecondComponent,
    LoginComponent,
    HomeTabsComponent,
    JoiningTabsComponent,
    FamilyComponent,
    PersonalDetailsComponent,
    BankComponent,
    EducationComponent,
    AttendenceComponent,
    PreviousEmployeementComponent,
    MedicalDeclarationComponent,
    AcceptanceComponent,
    AboutUsComponent,
    PoliciesComponent,
    ITDeclarationComponent,
    PayslipComponent,
    FinancialYearComponent,
    YearpayslipComponent,
    SalaryComponent,
    SalaryGroupComponent,
    SalaryShowComponent,
    FormulaSalaryComponent,
    MapsComponent,
    BranchComponent,
    HolidaylistComponent,
    ApprisalComponent,
    AppointmentComponent,
    ForgotPasswordComponent,
    ShowEmployeeComponent,
    AddEmployeeComponent,
    HRDetailsComponent,

  
    ShowEmployee1Component,

  
    GeneralComponent,

  
    WorkpatternComponent,

  
    PersonalComponent,

  
    AdminLoginComponent,

  
    AdminRegistrationComponent,

  
    AdminForgotpasswordComponent,


  


  
  ],
  imports: [
    HttpClientModule,
 BrowserModule ,
 FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
   
    HttpClientJsonpModule,
   
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatCheckboxModule,
    A11yModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    PortalModule,
    ScrollingModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFontAwesomeModule,
    AgmCoreModule.forRoot
    ({
      apiKey:'',
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
