import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { LandingComponent } from './components/landing/landing.component';


const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: '', component: LandingComponent },
  { path: '**', redirectTo: '/products'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
