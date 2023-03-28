import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListConsultantComponent } from './list-consultant/list-consultant.component';
import { AddConsultantComponent } from './add-consultant/add-consultant.component';
import { EditConsultantComponent } from './edit-consultant/edit-consultant.component';
import { PopupAddComponent } from './popup-add/popup-add.component';
import { Page404Component } from './page404/page404.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ListConsultantComponent,
    AddConsultantComponent,
    EditConsultantComponent,
    PopupAddComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
