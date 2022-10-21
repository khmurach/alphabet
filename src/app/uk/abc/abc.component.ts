import { AbcService } from './../../abc.service';
import { Component, OnInit } from '@angular/core';
import CarouselItem from 'src/app/models/carousel.item';

@Component({
  selector: 'app-abc',
  templateUrl: './abc.component.html',
  styleUrls: ['./abc.component.css'],
})
export class UkAbcComponent implements OnInit {
  items: CarouselItem[];

  constructor(abc: AbcService) {
    this.items = abc.getAbc('uk').map((x, i) => ({ content: x, position: i }));
  }

  ngOnInit(): void {}
}
