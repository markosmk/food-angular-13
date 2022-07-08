import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Food } from '../interfaces/food.interface';
import { FoodService } from '../services/food.service';

@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.css'],
})
export class AddFoodComponent {
  // @Output() onNewFood: EventEmitter<Food> = new EventEmitter();
  @Input() new: Food = {
    name: '',
    kc: 0,
  };
  constructor(private foodSrv: FoodService) {}

  addFood() {
    if (this.new.name.trim().length === 0) return;
    // this.onNewFood.emit(this.new);
    this.foodSrv.addFood(this.new);
    // console.log(this.new);
    this.new = { name: '', kc: 0 };
  }
}
