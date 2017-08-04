import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    // Register application-wide providers in the root AppModule, not in the AppComponent.
    // Lazy-loaded modules and their components can inject AppModule services; they can't inject AppComponent services.
    // Register a service in AppComponent providers only if the service must be hidden from components outside the AppComponent tree. This is a rare use case.
    // More generally, prefer registering providers in modules to registering in components.
  ],
})
export class AppComponent {
  title = 'app';
}