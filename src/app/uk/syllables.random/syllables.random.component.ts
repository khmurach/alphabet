import { Component, OnInit } from '@angular/core';
import { AbcService } from 'src/app/abc.service';
import CarouselItem from 'src/app/models/carousel.item';

@Component({
  selector: 'app-syllables.random',
  templateUrl: './syllables.random.component.html',
  styleUrls: ['./syllables.random.component.css'],
})
export class UkSyllablesRandomComponent implements OnInit {
  items: CarouselItem[];

  constructor(abc: AbcService) {
    this.items = abc
      .getSyllables('uk')
      .map((x) => ({ content: x, position: Math.random() }))
      .sort((a, b) => (a.position > b.position ? 1 : -1));
  }

  ngOnInit(): void {}
}
