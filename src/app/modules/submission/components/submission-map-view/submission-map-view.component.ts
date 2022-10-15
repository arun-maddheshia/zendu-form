import { Component, Input, OnInit } from '@angular/core';
import { Submission } from './../../models/submission.model';

@Component({
  selector: 'app-submission-map-view',
  templateUrl: './submission-map-view.component.html',
  styleUrls: ['./submission-map-view.component.scss'],
})
export class SubmissionMapViewComponent implements OnInit {
  @Input() submissions: Submission[] = [];

  constructor() {}

  ngOnInit(): void {}
}
