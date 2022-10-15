import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './../../shared/shared.module';

import { FilterComponent } from './components/filter/filter.component';
import { SearchComponent } from './components/filter/search/search.component';
import { SubmissionRoutingModule } from './submission-routing.module';
import { SubmissionComponent } from './submission.component';

import { GoogleMapComponent } from './components/google-map/google-map.component';
import { SubmissionBoxComponent } from './components/submission-box/submission-box.component';
import { SubmissionListViewComponent } from './components/submission-list-view/submission-list-view.component';
import { SubmissionMapViewComponent } from './components/submission-map-view/submission-map-view.component';
import { SubmissionStatusComponent } from './components/submission-status/submission-status.component';

@NgModule({
  declarations: [
    SubmissionComponent,
    FilterComponent,
    SearchComponent,
    SubmissionBoxComponent,
    SubmissionStatusComponent,
    SubmissionListViewComponent,
    SubmissionMapViewComponent,
    GoogleMapComponent,
  ],
  imports: [CommonModule, FormsModule, SubmissionRoutingModule, SharedModule],
})
export class SubmissionModule {}
