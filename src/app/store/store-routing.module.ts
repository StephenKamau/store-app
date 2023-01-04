import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductDetailPageComponent } from "./product-detail-page/product-detail-page.component";
import { ProductsPageComponent } from "./products-page/products-page.component";

const routes: Routes = [
    {
        path: '', component: ProductsPageComponent
    },
    { path: 'products/:id', component: ProductDetailPageComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StoreRoutingModule { }