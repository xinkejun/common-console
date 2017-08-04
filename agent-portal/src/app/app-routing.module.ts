/*
A routing module provides routing configuration for another module.
A routing module separates routing concerns from its companion module.
A routing module typically does the following:
Defines routes. Adds router configuration to the module's imports. Re-exports RouterModule. Adds guard and resolver service providers to the module's providers.
The name of the routing module should parallel the name of its companion module, using the suffix "Routing". For example, FooModule in foo.module.ts has a routing module named FooRoutingModule in foo-routing.module.ts
If the companion module is the root AppModule, the AppRoutingModule adds router configuration to its imports with RouterModule.forRoot(routes). All other routing modules are children that import RouterModule.forChild(routes).
A routing module re-exports the RouterModule as a convenience so that components of the companion module have access to router directives such as RouterLink and RouterOutlet.
A routing module should not have its own declarations. Components, directives, and pipes are the responsibility of the feature module, not the routing module.
A routing module should only be imported by its companion module.
The AppRoutingModule, ContactRoutingModule, and HeroRoutingModule are good examples.
*/
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Layout Components
import { FullLayoutComponent } from './core/layouts/full-layout.component';
import { SimpleLayoutComponent } from './core/layouts/simple-layout.component';

// Services
import { AuthGuard } from './core/auth/auth-guard.service';
import { SelectivePreloadingStrategy } from './core/selective-preloading-strategy';

const routes: Routes = [
  { path: '', redirectTo: 'loans', pathMatch: 'full' },
  {
    path: '',
    component: FullLayoutComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        path: 'loans',
        loadChildren: './loans/loans.module#LoansModule'
      },
    ]
  },
  {
    path: 'pages',
    component: SimpleLayoutComponent,
    loadChildren: './pages/pages.module#PagesModule',
  },
  { path: '**', redirectTo: 'pages/404' }
];

@NgModule({
  // Never call RouterModule.forRoot in a feature-routing module.
  imports: [RouterModule.forRoot(
    routes,
    {
      //enableTracing: true, // <-- debugging purposes only
      preloadingStrategy: SelectivePreloadingStrategy,
    }
  )],
  exports: [RouterModule],
  providers: [SelectivePreloadingStrategy]
})
export class AppRoutingModule { }