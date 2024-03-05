import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { TemplateFormComponent } from './template-form/template-form.component';
import { DataFormComponent } from './data-form/data-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateFormModule } from './template-form/template-form.module';
import { FormDebugComponent } from './form-debug/form-debug.component';
import { DataFormModule } from './data-form/data-form.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    TemplateFormModule,
    DataFormModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
