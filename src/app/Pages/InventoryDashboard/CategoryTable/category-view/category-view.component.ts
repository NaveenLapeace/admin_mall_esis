import { Component, OnInit } from '@angular/core';
import { Category } from '../../../../shared/category';
import { Brand } from '../../../../shared/brand';
import { CrudService } from '../../../../shared/crud.service';

@Component({
  selector: 'app-category-view',
  templateUrl: './category-view.component.html',
  styleUrls: ['./category-view.component.css']
})
export class CategoryViewComponent implements OnInit {

  category!: Category[];

  constructor(
    public crudAPI : CrudService
  ) { }

  ngOnInit() {
    this.crudAPI.getCategoryList().then(res =>{ 
      console.log('products',res);
      this.category = res;
    })
  }

}
