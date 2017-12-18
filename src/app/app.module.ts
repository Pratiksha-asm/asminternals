import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';

import { Comp2Component } from './comp2/comp2.component';
import { HomeComponent } from './home/home.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import {PgnotfoundComponent} from './pgnotfound/pgnotfound.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {Comp4Component} from './comp4/comp4.component';
import {Comp3Component} from'./comp3/comp3.component';
import {Comp1Component}  from './comp1/comp1.component';
const appRoutes: Routes = [
  {path:'',component:PgnotfoundComponent},
  { path: 'home', component: HomeComponent,
  children: [
    {
      path: '',
      children: [
        {path:'dashboard',component:DashboardComponent},
        { path: 'comp2', component: Comp2Component },
        {path:'comp4',component:Comp4Component},
        {path:'comp3',component:Comp3Component},
        {path:'comp1',component:Comp1Component},
        { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      ]
    }
  ] },
  { path: 'login', component: LoginpageComponent },
  {path:'logout',component:PgnotfoundComponent}

];


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    NgbModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
 ],
  declarations: [
    AppComponent,
    DashboardComponent,
    Comp2Component,
    Comp4Component,
    Comp1Component,
    Comp3Component,
    HomeComponent,
    LoginpageComponent,PgnotfoundComponent

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
