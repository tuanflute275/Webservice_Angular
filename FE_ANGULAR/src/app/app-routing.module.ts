import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './product/list/list.component';
import { AddComponent } from './product/add/add.component';
import { UpdateComponent } from './product/update/update.component';
import { CategoryComponent } from './category/category.component';
import { ProductByCateComponent } from './product-by-cate/product-by-cate.component';

const routes: Routes = [
  {path: "", component: ListComponent},
  {path: "product", component: ListComponent},
  {path: "product/add", component: AddComponent},
  {path: "product/edit/:id", component: UpdateComponent},

  {path: "category", component: CategoryComponent},
  {path: "product/cate/:id", component: ProductByCateComponent},
  {path: "*", component: ListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
