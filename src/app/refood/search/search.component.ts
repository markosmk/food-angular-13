import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RefoodService } from '../services/refood.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [],
})
export class SearchComponent implements OnInit {
  @ViewChild('query') query!: ElementRef<HTMLInputElement>;

  constructor(private reFoodSrv: RefoodService) {}

  ngOnInit(): void {}

  searchQuery() {
    const value = this.query.nativeElement.value;
    if (value.trim().length === 0) return;

    this.reFoodSrv.searchFoods(value);
    this.query.nativeElement.value = '';
  }
}
