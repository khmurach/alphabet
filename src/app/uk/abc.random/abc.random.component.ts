import { Component, OnInit } from '@angular/core';
import { AbcService } from 'src/app/abc.service';
import CarouselItem from 'src/app/models/carousel.item';

@Component({
  selector: 'app-abc.random',
  templateUrl: './abc.random.component.html',
  styleUrls: ['./abc.random.component.css'],
})
export class UkAbcRandomComponent implements OnInit {
  items: CarouselItem[];

  constructor(abc: AbcService) {
    this.items = abc
      .getAbc('uk')
      .map((x) => ({ content: x, position: Math.random() }))
      .sort((a, b) => (a.position > b.position ? 1 : -1));
  }

  ngOnInit(): void {}
}
