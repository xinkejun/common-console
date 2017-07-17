import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutMeComponent } from './about-me/about-me.component';
import { ChequeListComponent } from './cheques/cheque-list.component';
import { ChequeDetailComponent } from './cheques/cheque-detail.component';

import { SelectivePreloadingStrategy } from './shared/selective-preloading-strategy';

const routes: Routes = [
  // {
  //   path: 'dashboard',
  //   loadChildren: './dashboard/dashboard.module#DashboardModule' //lazy loading
  // },
  // {
  //   path: '',
  //   component: AppComponent,
  //   data: {
  //     title: 'Home'
  //   },
  //   children: [
  //     {
  //       path: 'dashboard',
  //       loadChildren: './dashboard/dashboard.module#DashboardModule'
  //     },
  //   ]
  // },
  {
    path: 'crisis-center',
    loadChildren: 'app/crisis-center/crisis-center.module#CrisisCenterModule', //lazy loading
    //data: { preload: true }
  },
  { path: 'cheques', component: ChequeListComponent },
  { path: 'cheques/:id', component: ChequeDetailComponent },
  { path: 'about-me', component: AboutMeComponent },

  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent }
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
  providers: [
    SelectivePreloadingStrategy
  ]
})
export class AppRoutingModule { }
