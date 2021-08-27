import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyComponent } from './property/property.component';
import { PropertyDetailComponent } from './property-detail/property-detail.component';
import { TenantComponent } from './tenant/tenant.component';
import { PaymentComponent } from './payment/payment.component';
import { NewPropertyComponent } from './new-property/new-property.component';
import { TenantsComponent } from './tenants/tenants.component';
import { TenantDetailComponent } from './tenant-detail/tenant-detail.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    PropertyComponent,
    PropertyDetailComponent,
    TenantComponent,
    PaymentComponent,
    NewPropertyComponent,
    TenantsComponent,
    TenantDetailComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
