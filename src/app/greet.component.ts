import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-greeter',
  templateUrl: 'greet.component.html'
})
export class GreetComponent {
  @Input() name = '';
  @Output() greet = new EventEmitter<string>();

  onGreet() {
    this.greet.emit(`Hello ${this.name || 'World'}!`);
    this.name = '';
  }
}
