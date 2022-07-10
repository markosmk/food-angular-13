import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FoodsModule } from './foods/foods.module';
import { SharedModule } from './shared/shared.module';
import { RefoodModule } from './refood/refood.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    FoodsModule,
    SharedModule,
    RefoodModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
