import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';

@NgModule({
  declarations: [HeaderComponent, NavComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent],
})
export class LayoutModule {}
