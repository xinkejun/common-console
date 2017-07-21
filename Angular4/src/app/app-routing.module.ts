import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SelectivePreloadingStrategy } from './shared/selective-preloading-strategy';

// Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';
import { SimpleLayoutComponent } from './layouts/simple-layout.component';

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
        path: 'about-me',
        loadChildren: './about-me/about-me.module#AboutMeModule',
      },
    ]
  },
  {
    path: 'pages',
    component: FullLayoutComponent, //SimpleLayoutComponent,FullLayoutComponent
    data: {
      title: 'Pages'
    },
    children: [
      {
        path: '',
        loadChildren: './pages/pages.module#PagesModule',
      }
    ]
  },
  { path: '**', redirectTo: 'pages/404' }
];

@NgModule({
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