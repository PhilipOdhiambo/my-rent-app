import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewPropertyComponent } from './new-property/new-property.component';
import { PropertyDetailComponent } from './property-detail/property-detail.component';
import { PropertyComponent } from './property/property.component';
import { TenantDetailComponent } from './tenant-detail/tenant-detail.component';
import { TenantsComponent } from './tenants/tenants.component';

const routes: Routes = [
  { path:'properties', component: PropertyComponent},
  { path:'properties/new', component: NewPropertyComponent},
  { path:'properties/:id', component: PropertyDetailComponent},
  { path:'addtenant/', component: PropertyDetailComponent},
  { path:'details/', component: TenantDetailComponent},

  { path: '', redirectTo:"/properties", pathMatch:"full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
