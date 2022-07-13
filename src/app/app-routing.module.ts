import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { EventFormComponent } from './Components/event-form/event-form.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';

const routes: Routes = [
  {
    path:'register',component:RegisterComponent
  },
  {
    path:'',component:LoginComponent
  },
  {
    path:'dashboard',component:DashboardComponent
  
  },
  {
    path:'event',component:EventFormComponent
  
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
