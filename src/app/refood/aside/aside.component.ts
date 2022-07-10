import { Component, OnInit } from '@angular/core';
import { RefoodService } from '../services/refood.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styles: [],
})
export class AsideComponent implements OnInit {
  get history() {
    return this.reFoodSrv.history;
  }

  constructor(private reFoodSrv: RefoodService) {}

  ngOnInit(): void {}

  search(item: string) {
    console.log(item);
    this.reFoodSrv.searchFoods(item);
  }
}
