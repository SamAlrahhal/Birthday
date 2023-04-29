import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskbarComponent } from './taskbar/taskbar.component';
import { AddPersonComponent } from './add-person/add-person.component';
import { ShowAllComponent } from './show-all/show-all.component';
@NgModule({
  declarations: [
    AppComponent,
    TaskbarComponent,
    AddPersonComponent,
    ShowAllComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
