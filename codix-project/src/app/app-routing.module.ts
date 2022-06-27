import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {   RegisterUserComponent} from './register-user/register-user.component';
import {   LoginComponent} from './login/login.component';
import { DataComponent } from './data/data.component';
import { EditComponent } from './edit/edit.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'register-user', component: RegisterUserComponent},
  
  { path: 'data', component: DataComponent},
  { path: 'edit', component: EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
