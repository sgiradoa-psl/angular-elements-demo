import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { GreetComponent } from './greet.component';

@NgModule({
  declarations: [
    GreetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [GreetComponent]
})
export class AppModule { }
