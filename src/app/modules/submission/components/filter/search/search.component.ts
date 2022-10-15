import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef,
} from '@angular/core';
import {
  debounceTime,
  distinctUntilChanged,
  Subject,
  switchMap,
  tap,
} from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Output() searchInput: EventEmitter<string> = new EventEmitter<string>();
  @ViewChild('search') search!: ElementRef;

  private searchSubject: Subject<string> = new Subject();
  isLoading$: Subject<boolean> = new Subject();

  ngOnInit(): void {
    // this.searchSubject.pipe(
    //   debounceTime(250),
    //   distinctUntilChanged(),
    //   tap(() => this.isLoading$.next(true)),
    //    switchMap((keyword) => console.log(keyword),
    //   tap((d) => {
    //     console.log(d);
    //      this.isLoading$.next(false);
    //   })
    // );

    this.searchSubject
      .pipe(debounceTime(250), distinctUntilChanged())
      .subscribe((keyword) => {
        this.searchInput.emit(keyword);
      });
  }

  onSearch($event: any) {
    const searchValue = $event.target.value;
    this.searchSubject.next(searchValue);
  }
}
