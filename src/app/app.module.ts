import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterDriverComponent } from './register-driver/register-driver.component';
import { RegisterdepartmentComponent } from './registerdepartment/registerdepartment.component';
import { JobsComponent } from './jobs/jobs.component';
import {HttpClientModule} from "@angular/common/http";
import { ToolbarComponent } from './toolbar/toolbar.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RegisterDriverComponent,
    RegisterdepartmentComponent,
    JobsComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
