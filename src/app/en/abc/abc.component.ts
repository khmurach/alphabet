import { Component, OnInit } from '@angular/core';
import { AbcService } from 'src/app/abc.service';
import CarouselItem from 'src/app/models/carousel.item';

@Component({
  selector: 'app-abc',
  templateUrl: './abc.component.html',
  styleUrls: ['./abc.component.css']
})
export class EnAbcComponent implements OnInit {

  items: CarouselItem[];

  constructor(abc: AbcService) {
    this.items = abc.getAbc('en').map((x, i) => ({ content: x, position: i }));
    console.log(this.items);
  }

  ngOnInit(): void {
  }

}
