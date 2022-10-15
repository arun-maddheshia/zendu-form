import { Component, OnInit } from '@angular/core';
import { EMAIL, STATUS, TASK_TITLE } from './fake-data/data';
import { Layout } from './models/layout.enum';
import { SubmissionStatus } from './models/submission-status.enum';
import { Submission } from './models/submission.model';

@Component({
  selector: 'app-submission',
  templateUrl: './submission.component.html',
  styleUrls: ['./submission.component.scss'],
})
export class SubmissionComponent implements OnInit {
  layout = Layout;
  activeLayout = Layout.MAP;
  submissions: Submission[] = [];
  filteredSearchResults: Submission[] = [];
  searchFilterValue = '';
  statusFilterValue = '';

  ngOnInit(): void {
    // Add dummy data
    for (let i = 1; i <= 15; i++) {
      this.submissions.push(this.createNewSubmission(i));
    }

    // set initial data as filtered data for view
    this.filteredSearchResults = this.submissions;
  }

  applyStatusFilter(status: SubmissionStatus) {
    this.statusFilterValue = status;
    this.setFilteredSearchResults();
  }

  applySearchFilter(searchFilter: string): void {
    this.searchFilterValue = searchFilter.trim().toLowerCase();
    this.setFilteredSearchResults();
  }

  private setFilteredSearchResults(): void {
    console.log(this.statusFilterValue);
    if (!this.searchFilterValue && !this.statusFilterValue) {
      this.filteredSearchResults = this.submissions;
      return;
    }

    this.filteredSearchResults = this.submissions.filter((result) => {
      return (
        (result.name.toLowerCase().includes(this.searchFilterValue) ||
          result.from.toLowerCase().includes(this.searchFilterValue) ||
          result.to.toLowerCase().includes(this.searchFilterValue)) &&
        result.status.includes(this.statusFilterValue)
      );
    });
  }

  createNewSubmission(id: number): Submission {
    return {
      id: id.toString(),
      name: this.buildRandom(TASK_TITLE),
      from: this.buildRandom(EMAIL),
      to: this.buildRandom(EMAIL),
      due_date: this.buildRandomDate(new Date(2022, 0, 1), new Date()),
      address: {
        full_address: '8502 Preston Rd. Inglewood, Maine 98380',
        short_address: '8502 Preston Rd. Inglewood',
        city: 'Dallas',
        country: 'United States',
        latitude: this.buildRandomCoordinate(28.70406),
        longitude: this.buildRandomCoordinate(77.102493),
        postal_code: '98380',
      },
      status: this.buildRandom(STATUS),
    };
  }

  buildRandom(sourceArray: Array<any>) {
    return sourceArray[Math.round(Math.random() * (sourceArray.length - 1))];
  }

  buildRandomCoordinate(startPos: number) {
    return startPos + ((Math.random() - 0.5) * 2) / 10;
  }

  buildRandomDate(start: Date, end: Date) {
    return new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
  }
}
