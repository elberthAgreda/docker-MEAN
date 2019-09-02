import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ComicComponent } from './comic/comic.component';
import { LoginComponent } from './auth/login.component';
import { AppRouting } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { ModalCustomModule } from './shared/components/modals/modal-videos.module';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    ComicComponent
  ],
  imports: [
    BrowserModule,
    AppRouting,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    ModalCustomModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
