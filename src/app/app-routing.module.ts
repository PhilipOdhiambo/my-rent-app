import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertyDetailComponent } from './property-detail/property-detail.component';
import { PropertyComponent } from './property/property.component';

const routes: Routes = [
  { path:'property', component: PropertyComponent},
  { path:'property/:id', component: PropertyDetailComponent},
  { path:'addtenant/', component: PropertyDetailComponent},
  { path:'addpayment', component: PropertyDetailComponent},




  { path: '', redirectTo:"/property", pathMatch:"full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
