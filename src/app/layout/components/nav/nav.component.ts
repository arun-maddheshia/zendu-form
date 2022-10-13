import { NavItem } from './../../models/nav-item.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  navItems: NavItem[] = [];

  constructor() {}

  ngOnInit(): void {
    this.navItems = this.getNavItems();
  }

  getNavItems(): NavItem[] {
    return [
      {
        title: 'forms',
        url: '',
        icon: 'icon-forms',
      },
      {
        title: 'customers',
        url: '',
        icon: 'icon-customers',
      },
      {
        title: 'submissions',
        url: '',
        icon: 'icon-submissions',
      },
      {
        title: 'history',
        url: '',
        icon: 'icon-history',
      },
      {
        title: 'reports',
        url: '',
        icon: 'icon-chart',
      },
      {
        title: 'workflow',
        url: '',
        icon: 'icon-chart',
      },
    ];
  }
}
