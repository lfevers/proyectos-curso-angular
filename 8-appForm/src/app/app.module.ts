import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TemplateComponent } from './components/template/template.component';
import { DataComponent } from './components/data/data.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

import {APP_ROUTING} from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    DataComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
