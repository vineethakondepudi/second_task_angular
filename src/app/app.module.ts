import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

import { Homechild1Component } from './homechild1/homechild1.component';
import { Homechild2Component } from './homechild2/homechild2.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import { FormComponent } from './form/form.component';
import {ButtonModule} from 'primeng/button'; 
import {PasswordModule} from 'primeng/password';
import { Form1Component } from './form1/form1.component';
import { Form2Component } from './form2/form2.component';
import { Form3Component } from './form3/form3.component';
import { Form4Component } from './form4/form4.component';
import {DropdownModule} from 'primeng/dropdown';
import { Form5Component } from './form5/form5.component';
import { FormbuilderComponent } from './formbuilder/formbuilder.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { Parent1Component } from './parent1/parent1.component';
import { Child1Component } from './child1/child1.component';
import { Formbuilder1Component } from './formbuilder1/formbuilder1.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { FormtableComponent } from './formtable/formtable.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
      Homechild1Component,
    Homechild2Component,
    FormComponent,
    Form1Component,
    Form2Component,
    Form3Component,
    Form4Component,
    Form5Component,
    FormbuilderComponent,
    ParentComponent,
    ChildComponent,
    Parent1Component,
    Child1Component,
    Formbuilder1Component,
    ReactiveformComponent,
    FormtableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    PasswordModule,
    DropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
