import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../../shared/crud.service';
import { MatDialog } from '@angular/material/dialog';
import { Category } from '../../../shared/category';
import { EditCategoryComponent } from '../../../models/EditCategory/edit-category/edit-category.component';

@Component({
  selector: 'app-category-table',
  templateUrl: './category-table.component.html',
  styleUrls: ['./category-table.component.css']
})
export class CategoryTableComponent implements OnInit {

  category!: Category[];
  shopName!: any;

  constructor(
    public crudApi: CrudService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {

    this.shopName = localStorage.getItem('shopName');

    if(this.shopName === 'shop1') {
      this.crudApi.getCategoryList().then(res => {
        this.category = res;
      })
    }
    if(this.shopName === 'shop2') {
      this.crudApi.getShop2CategoryList().then(res => {
        this.category = res;
      })
    }
    
  }

  removeCategory(categoryId: string){
    this.crudApi.DeleteCategories(categoryId);
  }

  openCategoryDetail(categoryId: string) {
    const categoryRef = this.dialog.open(EditCategoryComponent, {
      data: {categoryId},
    })

    categoryRef.afterClosed().subscribe((result => {
      console.log("Category Box Closed");
    }))
  }

  

}
