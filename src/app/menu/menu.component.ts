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
        label: 'Українська',
        items: [
          { label: 'Абетка відсотрована' },
          { label: 'Абетка перемішана' },
        ],
      },
      {
        label: 'English',
        items: [{ label: 'ABC Sorted' }, { label: 'ABC Random' }],
      },
    ];
  }

  ngOnInit(): void {}
}
