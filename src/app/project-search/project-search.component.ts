import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'wec-project-search',
  templateUrl: './project-search.component.html',
  styleUrls: ['./project-search.component.scss']
})
export class ProjectSearchComponent implements OnInit {

  @Output() typed = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  type(text: string) {
    this.typed.emit(text);
  }
}
