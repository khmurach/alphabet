import { Component, Input, OnInit } from '@angular/core';
import CarouselItem from '../models/carousel.item';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  @Input()
  items!: CarouselItem[];

  constructor() { }

  ngOnInit(): void {
  }

}
