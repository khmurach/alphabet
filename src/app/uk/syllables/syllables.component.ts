import { Component, OnInit } from '@angular/core';
import { AbcService } from 'src/app/abc.service';
import CarouselItem from 'src/app/models/carousel.item';

@Component({
  selector: 'app-syllables',
  templateUrl: './syllables.component.html',
  styleUrls: ['./syllables.component.css']
})
export class UkSyllablesComponent implements OnInit {
  items: CarouselItem[];

  constructor(abc: AbcService) {
    this.items = abc.getSyllables('uk').map((x, i) => ({ content: x, position: i }));
  }

  ngOnInit(): void {
  }

}
