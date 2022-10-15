import { Component, Input } from '@angular/core';
import { Submission } from './../../models/submission.model';

@Component({
  selector: 'app-submission-box',
  templateUrl: './submission-box.component.html',
  styleUrls: ['./submission-box.component.scss'],
})
export class SubmissionBoxComponent {
  @Input() submission!: Submission;
}
