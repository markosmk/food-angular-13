import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { BannerEmailComponent } from './banner-email/banner-email.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    BannerComponent,
    BannerEmailComponent,
  ],
  imports: [CommonModule],
  exports: [
    NavbarComponent,
    FooterComponent,
    BannerComponent,
    BannerEmailComponent,
  ],
})
export class SharedModule {}
