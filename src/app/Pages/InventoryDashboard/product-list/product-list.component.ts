import { Component, Inject, OnInit } from '@angular/core';
import { Product } from '../../../shared/product';
import { CrudService } from '../../../shared/crud.service';
import { EditProductComponent } from '../../../models/EditProduct/edit-product/edit-product.component';
import { MatDialog } from '@angular/material/dialog';
import { EditCategoryComponent } from '../../../models/EditCategory/edit-category/edit-category.component';
import { Category } from '../../../shared/category';
import { EditBrandComponent } from '../../../models/EditBrand/edit-brand/edit-brand.component';
import { Brand } from '../../../shared/brand';

import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products!: Product[];
  category!: Category[];
  brand!: Brand[];

  constructor(
    public crudApi: CrudService,
    private dialog: MatDialog
    ){ }

  ngOnInit() {
    this.crudApi.getProductsList().then(res =>{ 
      console.log('products',res);
      this.products = res;
    })

    this.crudApi.getBrandList().then(res => {
      console.log('brand', res);
      this.brand = res;
    })

    this.crudApi.getCategoryList().then(res => {
      console.log('category', res);
      this.category = res;
    })
    
  }

  removeProduct(productId: string){
      this.crudApi.DeleteProducts(productId);
      console.log("Clicked", productId);
  }

  removeBrand(brandId: string) {
    this.crudApi.DeleteBrand(brandId);
  }

  removeCategory(categoryId: string){
    this.crudApi.DeleteCategories(categoryId);
  }

  openProductDetail(productId: string) {
    const dialogRef = this.dialog.open(EditProductComponent,{
      data:{productId},
    })

    dialogRef.afterClosed().subscribe((result => {
      console.log('Dialog Box Closed');
    }))
  }

  openCategoryDetail(categoryId: string) {
    const categoryRef = this.dialog.open(EditCategoryComponent, {
      data: {categoryId},
    })

    categoryRef.afterClosed().subscribe((result => {
      console.log("Category Box Closed");
    }))
  }

  openBrandDetail(brandId: string) {
    const brandRef = this.dialog.open (EditBrandComponent, {
      data: {brandId},
    })

    brandRef.afterClosed().subscribe((result => {
      console.log("Category Box Closed");
    }))
  }

  // passProductID (productId: string) {
  //   this.editProduct.getProductID(productId);
  // }
}
