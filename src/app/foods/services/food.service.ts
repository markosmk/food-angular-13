import { Injectable } from '@angular/core';
import { Food } from '../interfaces/food.interface';

@Injectable()
export class FoodService {
  private _vegetarianFoods: Food[] = [
    {
      name: 'Milanesa de Jenjibre',
      kc: 32445,
    },
    {
      name: 'Empanadas de Frambuesa',
      kc: 4354,
    },
    {
      name: 'Ravioles de Brocoli',
      kc: 6756,
    },
  ];

  // rompe la referencia con el spread operator
  // para evitar manipular los datos
  get vegetarianFoods(): Food[] {
    return [...this._vegetarianFoods];
  }

  constructor() {}

  addFood(food: Food) {
    this._vegetarianFoods.push(food);
  }
}
