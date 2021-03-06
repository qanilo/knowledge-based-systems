import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule  } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginService } from './services/login.service';
import { UnitService } from './services/unit.service';

import { AppRoutingModule } from './/app-routing.module';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { UnitComponent } from './unit/unit.component';
import { MessagesComponent } from './messages/messages.component';
import { ReservationsComponent } from './reservations/reservations.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SyncComponent } from './sync/sync.component';

import { SidebarModule } from 'ng-sidebar';

import {ListUploadComponent} from './list-upload/list-upload.component';
import {UploadFileService} from './upload-file.service';
import { DetailsUploadComponent } from './details-upload/details-upload.component';
import { FormUploadComponent } from './form-upload/form-upload.component';
import { DocworkspaceComponent } from './docworkspace/docworkspace.component';
import { PatientsComponent } from './patients/patients.component';
import { DiseasesComponent } from './diseases/diseases.component';
import { SymptomsComponent } from './symptoms/symptoms.component';
import { DrugsComponent } from './drugs/drugs.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { DiagnoseComponent } from './diagnose/diagnose.component';
import { ReportsComponent } from './reports/reports.component';
import { TerapiesComponent } from './terapies/terapies.component';
import { DoctorsComponent } from './doctors/doctors.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    LogoutComponent,
    RegisterComponent,
    WorkspaceComponent,
    UnitComponent,
    MessagesComponent,
    ReservationsComponent,
    SyncComponent,
    DetailsUploadComponent,
    FormUploadComponent,
    DetailsUploadComponent,
    FormUploadComponent,
    ListUploadComponent,
    DocworkspaceComponent,
    PatientsComponent,
    DiseasesComponent,
    SymptomsComponent,
    DrugsComponent,
    IngredientsComponent,
    DiagnoseComponent,
    ReportsComponent,
    TerapiesComponent,
    DoctorsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgSelectModule,
    NgbModule.forRoot(),
    SidebarModule.forRoot()

  ],
  providers: [LoginService, UnitService,UploadFileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
