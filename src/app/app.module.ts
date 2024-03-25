import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterDriverComponent } from './register-driver/register-driver.component';
import { RegisterdepartmentComponent } from './registerdepartment/registerdepartment.component';
import { JobsComponent } from './jobs/jobs.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { ToolbarComponent } from './toolbar/toolbar.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './users/register/register.component';
import { HomeComponent } from './home/home.component';
import { HomeDefaultComponent } from './home-default/home-default.component';
import { UsersComponent } from './users/users.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UsersDefaultComponent } from './users/users-default/users-default.component';
import { TasksDefaultComponent } from './jobs/tasks-default/tasks-default.component';
import { CreateTaskComponent } from './jobs/create-task/create-task.component';
import { AssignUserTaskComponent } from './jobs/assign-user-task/assign-user-task.component';
import { UserTasksComponent } from './jobs/user-tasks/user-tasks.component';
import { TokeInterceptor } from './token-interceptor';
import { RequestLoggerInterceptor } from './RequestLoggerInterceptor';
import { ClientComponent } from './client/client.component';
import { ClientTasksComponent } from './client/client-tasks/client-tasks.component';
import { ClientAddTaskHistoryComponent } from './client/client-add-task-history/client-add-task-history.component';
import { ViewTaskComponent } from './jobs/view-task/view-task.component';
import { SortTaskHistoriesByDateCreatedPipe } from './jobs/view-task/SortTaskHistoriesByDateCreatedPipe ';
import { ClockComponent } from './clock/clock.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    RegisterDriverComponent,
    RegisterdepartmentComponent,
    JobsComponent,
    ToolbarComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    HomeDefaultComponent,
    UsersComponent,
    SidebarComponent,
    UsersDefaultComponent,
    TasksDefaultComponent,
    CreateTaskComponent,
    AssignUserTaskComponent,
    UserTasksComponent,
    ClientComponent,
    ClientTasksComponent,
    ClientAddTaskHistoryComponent,
    ViewTaskComponent,
    SortTaskHistoriesByDateCreatedPipe,
    ClockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokeInterceptor,
      multi:true,
    }, 
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: RequestLoggerInterceptor,
    //   multi: true,
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  //0721735314
}
