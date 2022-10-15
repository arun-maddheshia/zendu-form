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
        url: 'forms',
        icon: 'icon-forms',
      },
      {
        title: 'customers',
        url: 'customers',
        icon: 'icon-customers',
      },
      {
        title: 'submissions',
        url: 'submissions',
        icon: 'icon-submissions',
      },
      {
        title: 'history',
        url: 'history',
        icon: 'icon-history',
      },
      {
        title: 'reports',
        url: 'reports',
        icon: 'icon-chart',
      },
      {
        title: 'workflow',
        url: 'workflow',
        icon: 'icon-chart',
      },
    ];
  }
}
