import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskbarComponent } from './taskbar/taskbar.component';
import { AddPersonComponent } from './add-person/add-person.component';
import { ShowAllComponent } from './show-all/show-all.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { EditPersonComponent } from './edit-person/edit-person.component';
import { ServersService } from './server/servers.service';
import { ServerComponent } from './server/server.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskbarComponent,
    AddPersonComponent,
    ShowAllComponent,
    EditPersonComponent,
    ServerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    CommonModule,
    MatDialogModule,
    HttpClientModule,
  ],
  providers: [ServersService],
  bootstrap: [AppComponent],
})
export class AppModule {}
