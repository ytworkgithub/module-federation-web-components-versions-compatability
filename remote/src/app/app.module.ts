import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntryComponent } from './entry/entry.component';

@NgModule({
  declarations: [AppComponent, EntryComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AppComponent, EntryComponent],
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    customElements.define(
      'app-component',
      createCustomElement(AppComponent, { injector: this.injector })
    );

    customElements.define(
      'app-entry',
      createCustomElement(EntryComponent, { injector: this.injector })
    );
  }
}
