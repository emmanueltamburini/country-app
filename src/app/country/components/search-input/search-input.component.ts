import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html'
})
export class SearchInputComponent {

  @Output() public onEnter: EventEmitter<string> = new EventEmitter<string>();

  public query: string = '';

  public search(): void {
    this.onEnter.emit(this.query);
  }
}
