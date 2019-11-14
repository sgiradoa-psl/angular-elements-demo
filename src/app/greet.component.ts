import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'greet.component.html'
})
export class GreetComponent {
  @Input() name = '';

  onGreet() {
    alert(`Hello ${this.name || 'World'}!`);
    this.name = '';
  }
}
