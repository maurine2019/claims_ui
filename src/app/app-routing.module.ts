import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterDriverComponent } from './register-driver/register-driver.component';
import { RegisterdepartmentComponent } from './registerdepartment/registerdepartment.component';
import { JobsComponent } from './jobs/jobs.component';

const routes: Routes = [
  // {path:'',component:RegisterdepartmentComponent},
  {path:'register',component:RegisterDriverComponent},
  {path:'regdept',component:RegisterdepartmentComponent},
  {path:'createjob',component:JobsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
