import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {AboutComponent} from "./about/about.component";
import {HttpClientModule} from "@angular/common/http";
import {CompanyComponent} from "./company/company.component";
import {CompanyGuard} from "./company/company.guard";
import {AuthService} from "./services/auth.service";
import {DataService} from "./services/data.service";
import {LoginComponent} from "./login/login.component";

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent},
    { path: 'company', component: CompanyComponent, canActivate: [CompanyGuard] },
    { path: 'login', component: LoginComponent},
    { path: '**', component: NotFoundComponent}
];

@NgModule({
    bootstrap:    [ AppComponent ],
    declarations: [ AppComponent, HomeComponent, AboutComponent, CompanyComponent, LoginComponent, NotFoundComponent ],
    imports:      [ BrowserModule, HttpClientModule, FormsModule, RouterModule.forRoot(appRoutes) ],
    providers: [ CompanyGuard, AuthService, DataService ]
})
export class AppModule { }