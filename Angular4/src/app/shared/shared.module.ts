// Create a SharedModule with the components, directives, and pipes that you use everywhere in your app. This module should consist entirely of declarations, most of them exported.
// The SharedModule may re-export other widget modules, such as CommonModule, FormsModule, and modules with the UI controls that you use most widely.
// The SharedModule should not have providers for reasons explained previously. Nor should any of its imported or re-exported modules have providers. If you deviate from this guideline, know what you're doing and why.
// Import the SharedModule in your feature modules, both those loaded when the app starts and those you lazy load later.

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AlertComponent } from './alert.component';

// import { FilterTextComponent } from './filter-text/filter-text.component';
// import { FilterTextService } from './filter-text/filter-text.service';
// import { InitCapsPipe } from './init-caps.pipe';

//import { AwesomePipe } from './awesome.pipe';
//import { HighlightDirective } from './highlight.directive';

@NgModule({
  imports: [
    // Do import all modules required by the assets in the SharedModule; for example, CommonModule and FormsModule.
    CommonModule,
    // As it happens, the components declared by SharedModule itself don't bind with [(ngModel)]. Technically, there is no need for SharedModule to import FormsModule.
    // SharedModule can still export FormsModule without listing it among its imports.
    //FormsModule,
  ],
  declarations: [
    // Do declare components, directives, and pipes in a shared module when those items will be re-used and referenced by the components declared in other feature modules.
    AlertComponent,
    //FilterTextComponent,
    //InitCapsPipe,

    //AwesomePipe,
    //HighlightDirective,
  ],
  providers: [
    // Avoid providing services in shared modules. Services are usually singletons that are provided once for the entire application or in a particular feature module.
    // Avoid specifying app-wide singleton providers in a SharedModule. Intentional singletons are OK. Take care.
    // Do not specify app-wide singleton providers in a shared module. A lazy-loaded module that imports that shared module makes its own copy of the service.
    //FilterTextService
  ],
  exports: [
    // Do export all symbols from the SharedModule that other feature modules need to use.
    // You can reduce the repetition by having SharedModule re-export CommonModule and FormsModule so that importers of SharedModule get CommonModule and FormsModule for free.
    CommonModule,
    FormsModule,

    AlertComponent,
    //FilterTextComponent,
    //InitCapsPipe

    //AwesomePipe,
    //HighlightDirective,
  ]
})
export class SharedModule { }