import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  items: MenuItem[];

  constructor() {
    this.items = [
      {
        label: 'ABC',
        routerLink: [''],
      },
      {
        label: 'Українська',
        items: [
          { label: 'Абетка відсотрована', routerLink: ['uk/abc'] },
          { label: 'Абетка мікс', routerLink: ['uk/abc-random'] },
          { label: 'Склади відсотровані', routerLink: ['uk/syllables'] },
          { label: 'Склади мікс', routerLink: ['uk/syllables-random'] },
        ],
      },
      {
        label: 'English',
        items: [
          { label: 'ABC Sorted', routerLink: ['en/abc'] },
          { label: 'ABC Random', routerLink: ['en/abc-random'] },
        ],
      },
    ];
  }

  ngOnInit(): void {}
}
