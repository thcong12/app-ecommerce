import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () =>
      import('./component/index-page/index-page.module').then(
        (m) => m.IndexPageModule
      ),
  },
  {
    path: 'shop',
    loadChildren: () =>
      import('./component/shop-page/shop-page.module').then(
        (m) => m.ShopPageModule
      ),
  },
    {
    path: 'product',
    loadChildren: () =>
      import('./component/product-detail-page/product-detail-page.module').then(
        (m) => m.ProductDetailPageModule
      ),
  },
  {
    path: 'cart',
    loadChildren: () =>
      import('./component/cart-page/cart-page.module').then(
        (m) => m.CartPageModule
      ),
  },
  {
    path: 'checkout',
    loadChildren: () =>
      import('./component/check-out-page/check-out-page.module').then(
        (m) => m.CheckOutPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
