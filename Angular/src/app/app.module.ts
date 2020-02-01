import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MaterialModule} from './material/material.module'
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoComponent } from './todo/todo.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component'
import {HttpClientModule} from '@angular/common/http'
import {Routes, RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
const appRoute:Routes=[
{path:"todo",component:TodoComponent,canActivate:[AuthGuard]},
{path:"login",component:LoginComponent},
{path:"register",component:RegisterComponent},
// / {path:"" ,redirectTo:'login',pathMatch:'full'},
{path:"header" ,component:HeaderComponent,canActivate:[AuthGuard]}
]
@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoute),
    
  ],
  providers: [AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
