import { Component, EventEmitter, Output } from '@angular/core';
import { Layout } from './../../models/layout.enum';
import { SubmissionStatus } from './../../models/submission-status.enum';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  @Output() keywordSearch: EventEmitter<string> = new EventEmitter<string>();
  @Output() layoutUpdate: EventEmitter<Layout> = new EventEmitter<Layout>();
  @Output() statusUpdate: EventEmitter<SubmissionStatus> =
    new EventEmitter<SubmissionStatus>();

  submissionStatus = SubmissionStatus;
  layout = Layout;
  activeLayout = Layout.MAP;

  onKeywordSearch(searchText: string) {
    this.keywordSearch.emit(searchText);
  }

  onLayoutChange(layout: Layout): void {
    this.activeLayout = layout;
    this.layoutUpdate.emit(layout);
  }

  onStatusChange(status: SubmissionStatus) {
    this.statusUpdate.emit(status);
  }
}
