import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// MAT MODULES
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTooltipModule } from '@angular/material/tooltip';

const MAT_MODULES = [
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatNativeDateModule,
  MatDatepickerModule,
  MatButtonToggleModule,
  MatTableModule,
  MatPaginatorModule,
  MatTooltipModule,
];

@NgModule({
  declarations: [],
  imports: [CommonModule, MAT_MODULES],
  exports: [MatSelectModule, MAT_MODULES],
})
export class SharedModule {}
