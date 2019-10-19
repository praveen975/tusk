import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule } from "@angular/common/http";
import{HttpModule} from '@angular/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter'; //for search filter
import {NgxPaginationModule} from 'ngx-pagination'; // for pagination
import { RouterModule } from '@angular/router';

// for mutliple functionality
import{ LocationService} from './location.service';
import { ReactiveFormsModule} from '@angular/forms';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ProjectComponent } from './project/project.component';
import { ClassComponent } from './class/class.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ExtjsonComponent } from './extjson/extjson.component';
import { ValidationsComponent } from './validations/validations.component';
import { JobsComponent } from './jobs/jobs.component';


const pages=[
  {path:"myhome",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:"Extjson",component:ExtjsonComponent},
  {path:"jobs",component:JobsComponent},
  {path:"validation",component:ValidationsComponent},
  
]
@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    ClassComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    ExtjsonComponent,
    ValidationsComponent,
    JobsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    RouterModule.forRoot(pages)
  ],
  providers: [LocationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
