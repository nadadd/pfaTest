import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListConsultantComponent } from './list-consultant/list-consultant.component';
import { AddConsultantComponent } from './add-consultant/add-consultant.component';
import { EditConsultantComponent } from './edit-consultant/edit-consultant.component';

@NgModule({
  declarations: [
    AppComponent,
    ListConsultantComponent,
    AddConsultantComponent,
    EditConsultantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
