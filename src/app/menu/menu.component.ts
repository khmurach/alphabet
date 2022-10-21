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
          { label: 'Абетка перемішана', routerLink: ['uk/abc-random'] },
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
