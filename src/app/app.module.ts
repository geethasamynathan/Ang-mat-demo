import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './modules/material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableDemoComponent } from './mat-table-demo/mat-table-demo.component';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormDemoComponent } from './reactive-form-demo/reactive-form-demo.component';
import {MatDialogModule } from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import { MyModalComponent } from './my-modal/my-modal.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { Form2Component } from './form2/form2.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MatTableDemoComponent,
    ReactiveFormDemoComponent,
    MyModalComponent,
    ReactiveFormComponent,
    Form2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatCardModule,
    FormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
