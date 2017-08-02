// Create a CoreModule with providers for the singleton services you load when the application starts.
// Import CoreModule in the root AppModule only. Never import CoreModule in any other module.
// Consider making CoreModule a pure services module with no declarations. (not compulsory)

// Consider collecting numerous, auxiliary, single-use classes inside a core module to simplify the apparent structure of a feature module.
// Consider calling the application-wide core module, CoreModule. Importing CoreModule into the root AppModule reduces its complexity and emphasizes its role as orchestrator of the application as a whole.
// Avoid importing the CoreModule anywhere except in the AppModule.

import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
//import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

// Services
import { AppConfig } from '../app.config';
import { UserService } from './user.service';
import { AuthGuard } from './auth-guard.service';
import { AlertService } from './alert.service';
import { AuthenticationService } from './authentication.service';
//import { InMemoryDataService } from './in-memory-data.service';

// Components
import { FullLayoutComponent } from './layouts/full-layout.component';
import { SimpleLayoutComponent } from './layouts/simple-layout.component';
//import { AlertComponent } from './_directives/index';

// import { LoggerService } from './logger.service';
// import { NavComponent } from './nav/nav.component';
// import { SpinnerComponent } from './spinner/spinner.component';
// import { SpinnerService } from './spinner/spinner.service';

@NgModule({
    imports: [
        // Do import all modules required by the assets in the CoreModule (e.g. CommonModule and FormsModule).
        CommonModule,
        //FormsModule,
        RouterModule,
        HttpModule,
        HttpClientModule,
    ],
    declarations: [
        // Do gather application-wide, single use components in the CoreModule. Import it once (in the AppModule) when the app starts and never import it anywhere else. (e.g. NavComponent and SpinnerComponent).
        FullLayoutComponent,
        SimpleLayoutComponent,
        //NavComponent,
        //SpinnerComponent
        //TitleComponent
    ],
    providers: [
        // Do put a singleton service whose instance will be shared throughout the application in the CoreModule (e.g. ExceptionService and LoggerService).
        AppConfig,
        AuthGuard,
        AuthenticationService,
        AlertService,
        UserService,
        //LoggerService,
        //SpinnerService
    ],
    exports: [
        // Do export all symbols from the CoreModule that the AppModule will import and make available for other feature modules to use.
        //FullLayoutComponent,
        //SimpleLayoutComponent,
        //NavComponent,
        //SpinnerComponent
        //TitleComponent
    ],
})
export class CoreModule {
    // Only the root AppModule should import the CoreModule. Bad things happen if a lazy-loaded module imports it.
    // You could hope that no developer makes that mistake. Or you can guard against it and fail fast by adding the following CoreModule constructor.
    constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import it in the AppModule only');
        }
    }

    // static forRoot(config: UserServiceConfig): ModuleWithProviders {
    //     return {
    //         ngModule: CoreModule,
    //         providers: [
    //             //{ provide: UserServiceConfig, useValue: config }
    //         ]
    //     };
    // }
}