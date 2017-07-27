import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoHttpComponent } from './no-http/no-http.component';
import { HttpComponent } from './http/http.component';
import { WikiComponent } from './wiki/wiki.component';
import { WikiSmartComponent } from './wiki/wiki-smart.component';
import { CommonHttpComponent } from './common-http/common-http.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'no-http',
        component: NoHttpComponent,
      },
      {
        path: 'http',
        component: HttpComponent,
      },
      {
        path: 'wiki',
        component: WikiComponent,
      },
      {
        path: 'wiki-smart',
        component: WikiSmartComponent,
      },
      {
        path: 'common-http',
        component: CommonHttpComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HttpClientRoutingModule { }