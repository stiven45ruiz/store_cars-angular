import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';



import {ContactComponent} from './contact/contact.component';
import {DemoComponent} from './demo/demo.component'
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ProductDetailComponent} from './products/components/product-detail/product-detail.component';
import {LayoutComponent} from './layout/layout.component'

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren:() => import('./home/home.module').then(m => m.HomeModule)
        //component: HomeComponent,
      },
      {
        path: 'products',
        loadChildren:() => import('./products/products.module').then(m => m.ProductsModule)
        //component: ProductsComponent,
      },
      {
        path: 'products/:id',
        component: ProductDetailComponent,
      },
      {
        path: 'contact',
        component: ContactComponent,
      },
    ]
  },
  {
    path: 'demo',
    component: DemoComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
