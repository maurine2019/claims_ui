import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterDriverComponent } from './register-driver/register-driver.component';
import { RegisterdepartmentComponent } from './registerdepartment/registerdepartment.component';
import { JobsComponent } from './jobs/jobs.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './AuthGuard';
import { HomeDefaultComponent } from './home-default/home-default.component';
import { RegisterComponent } from './users/register/register.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { TasksDefaultComponent } from './jobs/tasks-default/tasks-default.component';
import { CreateTaskComponent } from './jobs/create-task/create-task.component';
import { AssignUserTaskComponent } from './jobs/assign-user-task/assign-user-task.component';
import { UsersDefaultComponent } from './users-default/users-default.component';

const routes: Routes = [
  {path:'',redirectTo:"home",pathMatch:'full'},
  {path:'home',component:HomeComponent,
  children:[
    {path:'',component:HomeDefaultComponent},
    {path:'tasks',component:JobsComponent,
      children:[
        {path:'',redirectTo:'tasks-default',pathMatch:'full'},
        {path:'tasks-default',component:TasksDefaultComponent},
        {path:'create-task',component:CreateTaskComponent},
        {path:'assign-user-task/:uuid',component:AssignUserTaskComponent},
      ]
  },
    {path:'users',component:UsersComponent,
        children:[
          {path:'',component:UsersDefaultComponent},
          {path:'register',component:RegisterComponent},
          {path:'register/:user_uuid',component:RegisterComponent},
        ]
  },
  ],
  canActivate: [AuthGuard]},
  {path:'login',component:LoginComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
