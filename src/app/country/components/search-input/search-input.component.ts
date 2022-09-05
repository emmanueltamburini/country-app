import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html'
})
export class SearchInputComponent implements OnInit {
  @Output() public onEnter: EventEmitter<string> = new EventEmitter<string>();

  @Output() public onDebounce: EventEmitter<string> = new EventEmitter<string>();

  @Input('placeholder') public placeholder: string = '';

  public debouncer: Subject<string> = new Subject<string>;

  public query: string = '';

  ngOnInit(): void {
    this.debouncer
    .pipe(debounceTime(300))
    .subscribe(value => {
      this.onDebounce.emit(value);
    });
  }

  public search(): void {
    this.onEnter.emit(this.query);
  }

  public onKeyUp(): void {
    this.debouncer.next(this.query);
  }
}
