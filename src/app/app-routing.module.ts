import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LazyModule } from './lazy/lazy.module';

const routes: Routes = [
  {path :'products',component:ProductsComponent},
  {path :'products/:id' , component:ProductDetailsComponent},
  {path :'',component:HomeComponent},
  {path:'feature',loadChildren:()=>import('./lazy/lazy.module').then(m =>m.LazyModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
