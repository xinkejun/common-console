import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Components
import { AppComponent } from './app.component';

// Modules
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    // Add declarable classes—components, directives, and pipes—to a declarations list.
    // Declare these classes in exactly one module of the application. Declare them in this module if they belong to this module.
    // Do not add NgModel—or the FORMS_DIRECTIVES—to the AppModule metadata's declarations. These directives belong to the FormsModule.
    AppComponent,
  ],
  imports: [
    // Do not import BrowserModule in any other module. Feature modules and lazy-loaded modules should import CommonModule instead. They need the common directives. They don't need to re-install the app-wide providers.
    // Import only BrowserModule in the root AppModule.
    // BrowserModule throws an error if you try to lazy load a module that imports it.
    BrowserModule,
    // Create a CoreModule with providers for the singleton services you load when the application starts.
    // Import CoreModule in the root AppModule only. Never import CoreModule in any other module.
    // Avoid importing the CoreModule anywhere except in the AppModule.
    CoreModule,
    AppRoutingModule,
  ],
  providers: [
    // Register application-wide providers in the root AppModule, not in the AppComponent.
  ],

  bootstrap: [AppComponent],

  //exports: [AppComponent],

  // Angular automatically adds the following types of components to the module's entryComponents:
  // - The component in the @NgModule.bootstrap list.
  // - Components referenced in router configuration.
  // You don't have to mention these components explicitly, although doing so is harmless.
  // A bootstrapped component is an entry component that Angular loads into the DOM during the bootstrap (application launch) process. Other entry components are loaded dynamically by other means, such as with the router.
  // The @NgModule.bootstrap property tells the compiler that this is an entry component and it should generate code to bootstrap the application with this component.
  // There's no need to list a component in both the bootstrap and entryComponent lists, although doing so is harmless.
  //entryComponents: [AppComponent],
})
export class AppModule {
  // Diagnostic only: inspect router configuration
  // constructor(router: Router) {
  //   console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  // }
}