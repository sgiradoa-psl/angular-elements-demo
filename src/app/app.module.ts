import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { FormsModule } from '@angular/forms';

import { GreetComponent } from './greet.component';

@NgModule({
  declarations: [GreetComponent],
  imports: [BrowserModule, FormsModule],
  entryComponents: [GreetComponent]
})
export class AppModule {
  constructor(private injector: Injector) { }

  ngDoBootstrap() {
    const GreetElement = createCustomElement(GreetComponent, { injector: this.injector });
    customElements.define('app-greeter', GreetElement);
  }
}
