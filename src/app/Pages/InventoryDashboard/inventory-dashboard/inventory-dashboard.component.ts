import { Component, Inject, OnInit } from '@angular/core';
import { Product } from '../../../shared/product';
import { CrudService } from '../../../shared/crud.service';
import { EditProductComponent } from '../../../models/EditProduct/edit-product/edit-product.component';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EditCategoryComponent } from '../../../models/EditCategory/edit-category/edit-category.component';
import { Category } from '../../../shared/category';
import { EditBrandComponent } from '../../../models/EditBrand/edit-brand/edit-brand.component';
import { Brand } from '../../../shared/brand';
import { DisplayViewComponent } from '../../MainDashboard/ProductView/display-view/display-view.component';
import { AddProductComponent } from '../../../models/AddProduct/add-product/add-product.component';
import { AddproductPopupComponent } from '../addproduct-popup/addproduct-popup.component';
import { AddSpecificationComponent } from '../AddSpecification/add-specification/add-specification.component';
import { ViewSpecificationComponent } from '../viewSpecification/view-specification/view-specification.component';
import { Shop2ViewSpecificationComponent } from '../shop2-view-specification/shop2-view-specification.component';

@Component({
  selector: 'app-inventory-dashboard',
  templateUrl: './inventory-dashboard.component.html',
  styleUrls: ['./inventory-dashboard.component.css']
})
export class InventoryDashboardComponent implements OnInit {

  shop1products!: Product[];
  shop2products!: Product[];

  category!: Category[];
  brand!: Brand[];
  shopName!: any;

  constructor(
    public crudApi: CrudService,
    private dialog: MatDialog
    ){ }

  ngOnInit() {

    this.shopName = localStorage.getItem('shopName');

    this.crudApi.getProductListByCategory().then(res => {
      console.log(res);
    })
    
    if(this.shopName === "shop1") {
      this.crudApi.getProductsList().then(res =>{ 
        this.shop1products = res;
      });
    }
    
    if(this.shopName === 'shop2') {
      this.crudApi.getShop2ProductsList().then(res =>{ 
        this.shop2products = res;
      });
    }
  }

  removeProduct(productId: string){
      this.crudApi.DeleteProducts(productId);
  }

  removeShop2Product(productId: string){
    this.crudApi.DeleteShop2Products(productId);
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
    }))
  }

  openProductSpecificationDetails(productId: string) {
    this.dialog.open(ViewSpecificationComponent, {
      data: {productId},
    }) 
  }

  
  openShop2ProductSpecificationDetails(productId: string) {
    this.dialog.open(Shop2ViewSpecificationComponent, {
      data: {productId},
    }) 
  }

  openCreateProductDetail() {
    const dialogRef = this.dialog.open(AddproductPopupComponent)
  }

  openCategoryDetail(categoryId: string) {
    const categoryRef = this.dialog.open(EditCategoryComponent, {
      data: {categoryId},
    })

    categoryRef.afterClosed().subscribe((result => {
    }))
  }

  openBrandDetail(brandId: string) {
    const brandRef = this.dialog.open (EditBrandComponent, {
      data: {brandId},
    })

    brandRef.afterClosed().subscribe((result => {
    }))
  }

  // passProductID (productId: string) {
  //   this.editProduct.getProductID(productId);
  // }

}
