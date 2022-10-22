import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import CarouselItem from 'src/app/models/carousel.item';

@Component({
  selector: 'app-syllables-settings',
  templateUrl: './syllables.settings.component.html',
  styleUrls: ['./syllables.settings.component.css'],
})
export class SyllablesSettingsComponent implements OnInit {
  @Input()
  items: CarouselItem[] = [];

  @Output()
  change = new EventEmitter<CarouselItem[]>();

  filters: CarouselItem[] = [];
  selectedFilters: CarouselItem[] = [];

  constructor() {}

  ngOnInit(): void {
    this.filters = [{ content: 'All', position: 0, class: 'col-1' }];

    const a: string[] = [];
    const b: string[] = [];

    for (let i = 0; i < this.items.length; i++) {
      const charA: string = this.items[i].content[0];
      const charB: string = this.items[i].content[1];

      if (!a.includes(charA)) {
        a.push(charA);
      }
      if (!b.includes(charB)) {
        b.push(charB);
      }
    }

    this.filters = this.filters.concat(
      b.map<CarouselItem>((x) => {
        return {
          content: '*' + x,
          position: this.filters.length,
          class: 'col-1',
        };
      })
    );

    for (let i = 0; i < a.length; i++) {
      this.filters.push({
        content: a[i] + '*',
        position: this.filters.length,
        class: 'col-1',
      });
      this.filters = this.filters.concat(
        this.items.slice(i * b.length, i * b.length + b.length)
      );
    }

    this.filters.forEach((x, i) => {
      x.class = i % (b.length + 1) == b.length ? 'col-6' : 'col-1';
    });

    this.selectedFilters = [...this.filters];
  }

  onFilterChange(item: CarouselItem) {
    const checkAll = this.filters.find((x) => x.content == 'All')!;
    const checkAllChecked = this.selectedFilters.includes(checkAll);
    const checkAllClicked = item == checkAll;

    const uncheckedFilters = checkAllClicked
      ? checkAllChecked
        ? []
        : [...this.filters]
      : this.filters.filter(
          (x) =>
            (x.content == 'All' || x.content.includes('*')) &&
            !this.selectedFilters.includes(x)
        );
    let items: CarouselItem[] = [...this.items];
    let filters: CarouselItem[] = [...this.filters];

    uncheckedFilters.forEach((f) => {
      const regex = new RegExp(f.content.replace('*', '.'));
      items = items.filter((x) => !x.content.match(regex));
      filters = filters.filter((x) => !x.content.match(regex));
    });

    this.change.emit(items);
    this.selectedFilters = filters;
  }
}
