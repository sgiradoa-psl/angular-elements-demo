import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  @Input() name = '';

  onGreet() {
    alert(`Hello ${this.name || 'World'}!`);
    this.name = '';
  }
}
