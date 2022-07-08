import { Component } from '@angular/core';
import { Food } from '../interfaces/food.interface';
import { FoodService } from '../services/food.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  new: Food = {
    name: 'Noquis excelentes',
    kc: 2324,
  };
  constructor() {}
}
