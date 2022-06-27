import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { ApiserviceService } from './apiservice.service';
import { DataComponent } from './data/data.component';
import {FormsModule,ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component'
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    RegisterUserComponent,
    LoginComponent,
    DataComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', redirectTo: '/login', pathMatch: 'full'},
      {path: 'login', component: LoginComponent},
      {path: 'register-user', component: LoginComponent},

      {path: 'edit', component: EditComponent},
      {path: 'data', component: DataComponent},
    ])
  ],
  providers: [ApiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
