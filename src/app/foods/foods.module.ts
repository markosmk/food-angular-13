import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainComponent } from './main/main.component';
import { VegetarianFoodsComponent } from './vegetarian-foods/vegetarian-foods.component';
import { AddFoodComponent } from './add-food/add-food.component';
import { FoodService } from './services/food.service';

@NgModule({
  declarations: [MainComponent, VegetarianFoodsComponent, AddFoodComponent],
  exports: [MainComponent],
  imports: [CommonModule, FormsModule],
  providers: [FoodService],
})
export class FoodsModule {}
