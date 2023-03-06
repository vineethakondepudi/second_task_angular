import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormComponent } from './form/form.component';

import { HomeComponent } from './home/home.component';
import { Homechild1Component } from './homechild1/homechild1.component';
import { Homechild2Component } from './homechild2/homechild2.component';

const routes: Routes = [
  {
    path:"home",component:HomeComponent,
    children:
    [
      {
        path:"homechild1",component:Homechild1Component
      },
      {
      path:"homechild2",component:Homechild2Component
      }
    ]
  },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
