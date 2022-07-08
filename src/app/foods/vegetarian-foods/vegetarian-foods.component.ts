import { Component, Input } from '@angular/core';
import { Food } from '../interfaces/food.interface';
import { FoodService } from '../services/food.service';

@Component({
  selector: 'app-vegetarian-foods',
  templateUrl: './vegetarian-foods.component.html',
  styleUrls: ['./vegetarian-foods.component.css'],
})
export class VegetarianFoodsComponent {
  // @Input('list') vegetarianFoods: Food[] = [];
  get vegetarianFoods(): Food[] {
    return this.foodSrv.vegetarianFoods;
  }
  constructor(private foodSrv: FoodService) {}
}
