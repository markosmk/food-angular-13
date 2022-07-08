import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FoodsModule } from './foods/foods.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, FoodsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
