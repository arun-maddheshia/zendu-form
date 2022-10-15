import { Component, Input } from '@angular/core';
import { noSpecialCharacters } from '@app/shared/util';
import { SubmissionStatus } from './../../models/submission-status.enum';

@Component({
  selector: 'app-submission-status',
  templateUrl: './submission-status.component.html',
  styleUrls: ['./submission-status.component.scss'],
})
export class SubmissionStatusComponent {
  @Input() status!: string;
  SubmissionStatus = SubmissionStatus;
}
