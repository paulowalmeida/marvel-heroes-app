import { AfterViewInit, Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

import { Subject, fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, tap, } from 'rxjs/operators';

@Component({
  selector: 'mc-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements AfterViewInit {

  @ViewChild('searchInput') searchInput: ElementRef<HTMLInputElement> | any;
  searchTerm = new Subject<string>();

  @Output() charactersNameEmitter: EventEmitter<string> =
    new EventEmitter<string>();

  constructor() {}
  ngAfterViewInit(): void {
    fromEvent(this.searchInput.nativeElement, 'keyup')
      .pipe(
        filter(Boolean),
        debounceTime(300),
        distinctUntilChanged(),
        tap(() => {
          const text = this.searchInput.nativeElement.value;
          this.charactersNameEmitter.emit(text);
        })
      )
      .subscribe();
  }
}
