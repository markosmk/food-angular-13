import { Component, OnInit } from '@angular/core';
import { RefoodService } from '../services/refood.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styles: [],
})
export class ListingComponent implements OnInit {
  get results() {
    return this.reFoodSrv.results;
  }

  constructor(private reFoodSrv: RefoodService) {}

  ngOnInit(): void {}
}
