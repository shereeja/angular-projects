import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PackagesComponent } from './packages/packages.component';
import { PackagedetailComponent } from './packagedetail/packagedetail.component';
import { BookingdetailComponent } from './bookingdetail/bookingdetail.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OfferComponent } from './offer/offer.component';
import { AboutComponent } from './about/about.component';
import { CarousalComponent } from './carousal/carousal.component';
import { FooterComponent } from './footer/footer.component';
import { StayComponent } from './stay/stay.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    PackagesComponent,
    PackagedetailComponent,
    BookingdetailComponent,
    ContactFormComponent,
    NavbarComponent,
    OfferComponent,
    AboutComponent,
    CarousalComponent,
    FooterComponent,
    StayComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
