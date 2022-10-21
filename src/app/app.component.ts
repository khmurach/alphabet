import { Component } from '@angular/core';
import { Carousel } from 'primeng/carousel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'alphabet';

  constructor() {
    Carousel.prototype.onTouchMove = () => {};
  }
}
