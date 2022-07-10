import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodPageComponent } from './food-page/food-page.component';
import { SearchComponent } from './search/search.component';
import { ListingComponent } from './listing/listing.component';
import { AsideComponent } from './aside/aside.component';

@NgModule({
  declarations: [FoodPageComponent, SearchComponent, ListingComponent, AsideComponent],
  imports: [CommonModule],
  exports: [FoodPageComponent],
})
export class RefoodModule {}
