import { Component, Input, OnChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Submission } from './../../models/submission.model';

@Component({
  selector: 'app-submission-list-view',
  templateUrl: './submission-list-view.component.html',
  styleUrls: ['./submission-list-view.component.scss'],
})
export class SubmissionListViewComponent implements OnChanges {
  displayedColumns = ['name', 'status', 'from', 'to', 'address', 'due_date'];
  @Input() submissions: Submission[] = [];
  @Input() dataSource!: MatTableDataSource<Submission>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnChanges(): void {
    this.dataSource = new MatTableDataSource(this.submissions);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
