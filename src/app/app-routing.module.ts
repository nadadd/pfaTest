import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddConsultantComponent } from './add-consultant/add-consultant.component';
import { EditConsultantComponent } from './edit-consultant/edit-consultant.component';
import { ListConsultantComponent } from './list-consultant/list-consultant.component';

const routes: Routes = [
  {
    path:'',
    component:ListConsultantComponent
  },
  {
    path:'edit',
    component:EditConsultantComponent
  },
  {
    path:'add',
    component:AddConsultantComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
