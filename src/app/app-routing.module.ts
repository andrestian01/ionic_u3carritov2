import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{
  path: '',
  redirectTo: 'login-page',
  pathMatch: 'full'
},
{
  path: 'login-page',
    loadChildren: () => import('./login-page/login-page.module').then(m => m.LoginPagePageModule)
},
{
  path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
},
{
  path: 'add-product',
    loadChildren: () => import('./add-product/add-product.module').then(m => m.AddProductPageModule)
},

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
