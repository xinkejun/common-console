// CoreModule is service module
/*
Service modules provide utility services such as data access and messaging.
Ideally, they consist entirely of providers and have no declarations. The CoreModule and Angular's HttpModule are good examples.
Service Modules should only be imported by the root AppModule.
Do not import service modules in other feature modules. If you deviate from this guideline, know what you're doing and why.
*/
// Consider collecting numerous, auxiliary, single-use classes inside a core module to simplify the apparent structure of a feature module.
// Consider calling the application-wide core module, CoreModule. Importing CoreModule into the root AppModule reduces its complexity and emphasizes its role as orchestrator of the application as a whole.
// Consider making CoreModule a pure services module with no declarations. (not compulsory)

import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// Components
import { FullLayoutComponent } from './layouts/full-layout.component';
import { SimpleLayoutComponent } from './layouts/simple-layout.component';
import { AlertComponent } from './alert.component';

// Services
import { AlertService } from './alert.service';
import { AppConfig } from '../app.config';
import { AuthGuard, AuthInterceptor, AuthService } from './auth';
import { UserService } from './user.service';

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
        AlertComponent,
    ],
    providers: [
        // Do put a singleton service whose instance will be shared throughout the application in the CoreModule (e.g. ExceptionService and LoggerService).
        AlertService,
        AppConfig,
        AuthGuard,
        AuthService,
        UserService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true,
        },
    ],
    exports: [
        // Do export all symbols from the CoreModule that the AppModule will import and make available for other feature modules to use.
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
}