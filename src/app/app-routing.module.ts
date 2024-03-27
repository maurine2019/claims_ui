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
import { UsersDefaultComponent } from './users/users-default/users-default.component';
import { UserTasksComponent } from './jobs/user-tasks/user-tasks.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ClientComponent } from './client/client.component';
import { ClientTasksComponent } from './client/client-tasks/client-tasks.component';
import { ClientAddTaskHistoryComponent } from './client/client-add-task-history/client-add-task-history.component';
import { ViewTaskComponent } from './jobs/view-task/view-task.component';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:'full'},
  {path:'home',component:HomeComponent,
  children:[
    {path:"",component:HomeDefaultComponent},
    {path:'tasks',component:JobsComponent,
      children:[
        {path:'',redirectTo:'tasks-default',pathMatch:'full'},
        {path:'tasks-default',component:TasksDefaultComponent},
        {path:'create-task',component:CreateTaskComponent,canActivate: [AuthGuard], data: { roles: ["ROLE_MANAGER"] }},
        {path:'assign-user-task/:uuid',component:AssignUserTaskComponent},
        {path:'user-tasks',component:UserTasksComponent},
        {path:'user-tasks/:user_uuid',component:UserTasksComponent},
        {path:'view-task/:uuid',component:ViewTaskComponent},
      ],canActivate: [AuthGuard], data: { roles: ["ROLE_MANAGER"] }
  },
    {path:'users',component:UsersComponent,
        children:[
          {path:"",component:UsersDefaultComponent},
          {path:'register',component:RegisterComponent},
          {path:'register/:user_uuid',component:RegisterComponent},
         
        ],canActivate: [AuthGuard], data: { roles: ["ROLE_MANAGER"] }
  },
  {path:'client',component:ClientComponent,
  children:[
    {path:'tasks',component:ClientTasksComponent},
    {path:'addhistory/:uuid',component:ClientAddTaskHistoryComponent},
  ]

},
  ],
 },
  
  {path:'login',component:LoginComponent},

  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
