import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-empty-data',
  templateUrl: './empty-data.component.html',
  styleUrls: ['./empty-data.component.scss'],
})
export class EmptyDataComponent {
  @Input() message = 'No matching data found!';
  @Input() fullBorderStyle = false;
}
