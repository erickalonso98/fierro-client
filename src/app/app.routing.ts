import { ModuleWithProviders } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { AdminComponent } from "./components/admin/admin.component";
import { DetailComponent } from "./components/detail/detail.component";
import { ErrorComponent } from "./components/error/error.component";
import { ExploitationTypeComponent } from "./components/exploitation-type/exploitation-type.component";
import { HighAltaComponent } from "./components/high-alta/high-alta.component";
import { IronDetailComponent } from "./components/iron-detail/iron-detail.component";
import { IronEditComponent } from "./components/iron-edit/iron-edit.component";
import { IronTypeComponent } from "./components/iron-type/iron-type.component";
import { IronComponent } from "./components/iron/iron.component";
import { LoginComponent } from "./components/login/login.component";
import { PersonDetailComponent } from "./components/person-detail/person-detail.component";
import { PersonEditComponent } from "./components/person-edit/person-edit.component";
import { PersonInformationComponent } from "./components/person-information/person-information.component";
import { PersonComponent } from "./components/person/person.component";
import { PropertyDetailComponent } from "./components/property-detail/property-detail.component";
import { PropertyEditComponent } from "./components/property-edit/property-edit.component";
import { PropertyIronComponent } from "./components/property-iron/property-iron.component";
import { PropertyComponent } from "./components/property/property.component";
import { RegisterComponent } from "./components/register/register.component";
import { ReportComponent } from "./components/report/report.component";
import { RolesComponent } from "./components/roles/roles.component";
import { SettingsComponent } from "./components/settings/settings.component";
import { SuperAdminComponent } from "./components/super-admin/super-admin.component";
import { TenenciaDetailComponent } from "./components/tenencia-detail/tenencia-detail.component";
import { TenenciaTypeComponent } from "./components/tenencia-type/tenencia-type.component";
import { TypeExploitationDetailComponent } from "./components/type-exploitation-detail/type-exploitation-detail.component";
import { TypeIronDetailComponent } from "./components/type-iron-detail/type-iron-detail.component";
import { UserComponent } from "./components/user/user.component";
import { UsersComponent } from "./components/users/users.component";

import { IndentityGuard } from "./services/indentity.guard";

const appRoutes:Routes = [
    {path:'',redirectTo:'/login',pathMatch:'full'},
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:'super-admin',component:SuperAdminComponent},
    {path:'admin',component:AdminComponent},
    {path:'user',component:UserComponent},
    {path:'users',component:UsersComponent},
    {path:'detail/:id',component:DetailComponent,canActivate:[IndentityGuard]},
    {path:'settings',component:SettingsComponent,canActivate:[IndentityGuard]},
    {path:'person',component:PersonComponent,canActivate:[IndentityGuard]},
    {path:'person-detail/:id',component:PersonDetailComponent,canActivate:[IndentityGuard]},
    {path:'iron',component:IronComponent,canActivate:[IndentityGuard]},
    {path:'property',component:PropertyComponent,canActivate:[IndentityGuard]},
    {path:'exploitation-type',component:ExploitationTypeComponent,canActivate:[IndentityGuard]},
    {path:'type-tenencia',component:TenenciaTypeComponent,canActivate:[IndentityGuard]},
    {path:'iron-type',component:IronTypeComponent,canActivate:[IndentityGuard]},
    {path:'list-person-information',component:PersonInformationComponent,canActivate:[IndentityGuard]},
    {path:'property-iron',component:PropertyIronComponent,canActivate:[IndentityGuard]},
    {path:'high-alta',component:HighAltaComponent},
    {path:'roles-users',component:RolesComponent,canActivate:[IndentityGuard]},
    {path:'person-edit/:id',component:PersonEditComponent,canActivate:[IndentityGuard]},
    {path:'generate_report',component:ReportComponent,canActivate:[IndentityGuard]},
    {path:'exploitation/:id',component:TypeExploitationDetailComponent,canActivate:[IndentityGuard]},
    {path:'tenencia-detail/:id',component:TenenciaDetailComponent,canActivate:[IndentityGuard]},
    {path:'type-iron-detail/:id',component:TypeIronDetailComponent,canActivate:[IndentityGuard]},
    {path:'iron-detail/:id',component:IronDetailComponent,canActivate:[IndentityGuard]},
    {path:'property-detail/:id',component:PropertyDetailComponent,canActivate:[IndentityGuard]},
    {path:'iron-edit/:id',component:IronEditComponent,canActivate:[IndentityGuard]},
    {path:'property-edit/:id',component:PropertyEditComponent,canActivate:[IndentityGuard]},
    {path:'logout/:sure',component:LoginComponent},
    {path:'**',component:ErrorComponent}
];

export const appRotingProviders:any[] = [];
export const routing:ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);