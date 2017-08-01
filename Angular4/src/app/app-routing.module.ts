import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SelectivePreloadingStrategy } from './core/selective-preloading-strategy';

// Layouts
import { FullLayoutComponent } from './core/layouts/full-layout.component';
import { SimpleLayoutComponent } from './core/layouts/simple-layout.component';

import { HttpClientComponent } from './http-client/http-client.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: '',
    component: FullLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'crisis-center',
        loadChildren: './crisis-center/crisis-center.module#CrisisCenterModule',
        //data: { preload: true }
      },
      {
        path: 'cheques',
        loadChildren: './cheques/cheques.module#ChequesModule',
      },
      {
        path: 'http-client',
        loadChildren: './http-client/http-client.module#HttpClientModule',
      },
      {
        path: 'admin',
        loadChildren: './admin/admin.module#AdminModule',
      },
      {
        path: 'about-me',
        loadChildren: './about-me/about-me.module#AboutMeModule',
      },
    ]
  },
  {
    path: 'pages',
    component: SimpleLayoutComponent, //SimpleLayoutComponent,FullLayoutComponent
    loadChildren: './pages/pages.module#PagesModule',
    // children: [
    //   {
    //     path: '',
    //     loadChildren: './pages/pages.module#PagesModule',
    //   }
    // ]
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