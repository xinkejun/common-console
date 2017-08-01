import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    data: {
      title: 'Dashboard'
    }
  }
];

@NgModule({
  // If the companion module is the root AppModule, the AppRoutingModule adds router configuration to its imports with RouterModule.forRoot(routes). All other routing modules are children that import RouterModule.forChild(routes).
  imports: [RouterModule.forChild(routes)],

  // A routing module should not have its own declarations. Components, directives, and pipes are the responsibility of the feature module, not the routing module.
  //declarations: [],

  exports: [
    // A routing module re-exports the RouterModule as a convenience so that components of the companion module have access to router directives such as RouterLink and RouterOutlet
    RouterModule
  ]
})
export class DashboardRoutingModule { }
