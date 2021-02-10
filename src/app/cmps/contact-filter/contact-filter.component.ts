import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'contact-filter',
  templateUrl: './contact-filter.component.html',
  styleUrls: ['./contact-filter.component.scss']
})
export class ContactFilterComponent implements OnInit {

  @Output() onSetFilter = new EventEmitter()

  filterBy = {
    term: ''
  }
  constructor() { }

  ngOnInit(): void {
  }

  setFilter(filterBy: any): void {
    this.onSetFilter.emit(filterBy)
  }

}
