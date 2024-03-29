import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { appRotingProviders,routing } from './app.routing';

import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { AngularFileUploaderModule } from "angular-file-uploader";
import { SidebarModule } from 'ng-sidebar';


import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { PruebaComponent } from './pruebas/prueba/prueba.component';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';
import { RegisterComponent } from './components/register/register.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { HeadersComponent } from './components/headers/headers.component';
import { SuperAdminComponent } from './components/super-admin/super-admin.component';
import { AdminComponent } from './components/admin/admin.component';
import { UserComponent } from './components/user/user.component';
import { DetailComponent } from './components/detail/detail.component';
import { SettingsComponent } from './components/settings/settings.component';
import { PersonComponent } from './components/person/person.component';
import { IronComponent } from './components/iron/iron.component';
import { PropertyComponent } from './components/property/property.component';
import { ExploitationTypeComponent } from './components/exploitation-type/exploitation-type.component';
import { TenenciaTypeComponent } from './components/tenencia-type/tenencia-type.component';
import { IronTypeComponent } from './components/iron-type/iron-type.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { UsersComponent } from './components/users/users.component';
import { ListExploitationsComponent } from './components/list-exploitations/list-exploitations.component';
import { ListTenenciasComponent } from './components/list-tenencias/list-tenencias.component';
import { PersonListComponent } from './components/person-list/person-list.component';
import { IronListComponent } from './components/iron-list/iron-list.component';
import { PropertyListComponent } from './components/property-list/property-list.component';
import { PersonInformationComponent } from './components/person-information/person-information.component';
import { PersonDetailComponent } from './components/person-detail/person-detail.component';
import { PropertyIronComponent } from './components/property-iron/property-iron.component';
import { FormPropertyComponent } from './components/form-property/form-property.component';
import { FormIronComponent } from './components/form-iron/form-iron.component';
import { HighAltaComponent } from './components/high-alta/high-alta.component';
import { ListIronsComponent } from './components/list-irons/list-irons.component';
import { ListPropertyComponent } from './components/list-property/list-property.component';
import { ListFierroComponent } from './components/list-fierro/list-fierro.component';
import { RolesComponent } from './components/roles/roles.component';
import { RolesListComponent } from './components/roles-list/roles-list.component';
import { ReportComponent } from './components/report/report.component';
import { PersonEditComponent } from './components/person-edit/person-edit.component';
import { IneReportFormComponent } from './components/ine-report-form/ine-report-form.component';
import { RfcReportFormComponent } from './components/rfc-report-form/rfc-report-form.component';
import { CurpReportFormComponent } from './components/curp-report-form/curp-report-form.component';
import { NameReportFormComponent } from './components/name-report-form/name-report-form.component';



import { PdfMakeWrapper } from 'pdfmake-wrapper';
import * as pdfFonts from "pdfmake/build/vfs_fonts";
import { TypeExploitationDetailComponent } from './components/type-exploitation-detail/type-exploitation-detail.component';
import { IronDetailComponent } from './components/iron-detail/iron-detail.component';
import { PropertyDetailComponent } from './components/property-detail/property-detail.component';
import { TenenciaDetailComponent } from './components/tenencia-detail/tenencia-detail.component';
import { TypeIronDetailComponent } from './components/type-iron-detail/type-iron-detail.component'; // fonts provided for pdfmake

// If any issue using previous fonts import. you can try this:
// import pdfFonts from "pdfmake/build/vfs_fonts";

// Set the fonts to use
PdfMakeWrapper.setFonts(pdfFonts);

import { IndentityGuard } from "./services/indentity.guard";
import { UserService } from './services/user.service';
import { ListStateComponent } from './components/list-state/list-state.component';
import { FormStateComponent } from './components/form-state/form-state.component';
import { FormMunicipalityComponent } from './components/form-municipality/form-municipality.component';
import { ListMunicipalityComponent } from './components/list-municipality/list-municipality.component';
import { IronEditComponent } from './components/iron-edit/iron-edit.component';
import { PropertyEditComponent } from './components/property-edit/property-edit.component';
import { ReportCurpComponent } from './components/report-curp/report-curp.component';
import { ReportRfcComponent } from './components/report-rfc/report-rfc.component';
import { ReportNameComponent } from './components/report-name/report-name.component';
import { ReportIdComponent } from './components/report-id/report-id.component';
import { IdReportFormComponent } from './components/id-report-form/id-report-form.component';
import { FootComponent } from './components/foot/foot.component';
import { TimeMenuComponent } from './components/time-menu/time-menu.component';
import { PayHighComponent } from './components/pay-high/pay-high.component';
import { ListHighPayComponent } from './components/list-high-pay/list-high-pay.component';


@NgModule({
  declarations: [
    AppComponent,
    PruebaComponent,
    LoginComponent,
    ErrorComponent,
    RegisterComponent,
    ListUsersComponent,
    HeadersComponent,
    SuperAdminComponent,
    AdminComponent,
    UserComponent,
    DetailComponent,
    SettingsComponent,
    PersonComponent,
    IronComponent,
    PropertyComponent,
    ExploitationTypeComponent,
    TenenciaTypeComponent,
    IronTypeComponent,
    SidebarComponent,
    UsersComponent,
    ListExploitationsComponent,
    ListTenenciasComponent,
    PersonListComponent,
    IronListComponent,
    PropertyListComponent,
    PersonInformationComponent,
    PersonDetailComponent,
    PropertyIronComponent,
    FormPropertyComponent,
    FormIronComponent,
    HighAltaComponent,
    ListIronsComponent,
    ListPropertyComponent,
    ListFierroComponent,
    RolesComponent,
    RolesListComponent,
    ReportComponent,
    PersonEditComponent,
    IneReportFormComponent,
    RfcReportFormComponent,
    CurpReportFormComponent,
    NameReportFormComponent,
    TypeExploitationDetailComponent,
    IronDetailComponent,
    PropertyDetailComponent,
    TenenciaDetailComponent,
    TypeIronDetailComponent,
    ListStateComponent,
    FormStateComponent,
    FormMunicipalityComponent,
    ListMunicipalityComponent,
    IronEditComponent,
    PropertyEditComponent,
    ReportCurpComponent,
    ReportRfcComponent,
    ReportNameComponent,
    ReportIdComponent,
    IdReportFormComponent,
    FootComponent,
    TimeMenuComponent,
    PayHighComponent,
    ListHighPayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    FroalaEditorModule.forRoot(), FroalaViewModule.forRoot(),
    routing,
    AngularFileUploaderModule,
    SidebarModule.forRoot()
  ],
  providers: [appRotingProviders,IndentityGuard,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
