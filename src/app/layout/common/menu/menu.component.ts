import { Component, Input } from '@angular/core';
import { Menu } from './menu.type';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  @Input() menu: Menu = [];
  // menu: Menu = [
  //   {
  //     title: 'Home',
  //     icon: 'home',
  //     link: '/home',
  //     color: '#ff7f0e',
  //   },
  //   {
  //     title: 'Statistics',
  //     icon: 'bar_chart',
  //     color: '#ff7f0e',
  //     subMenu: [
  //       {
  //         title: 'Sales',
  //         icon: 'money',
  //         link: '/sales',
  //         color: '#ff7f0e',
  //       },
  //       {
  //         title: 'Customers',
  //         icon: 'people',
  //         color: '#ff7f0e',
  //         link: '/customers',
  //       },
  //     ],
  //   },
  // ];
}
