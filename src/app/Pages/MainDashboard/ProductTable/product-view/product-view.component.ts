import { Component, OnInit } from '@angular/core';
import { Product } from '../../../../shared/product';
import { CrudService } from '../../../../shared/crud.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {

  products!: Product[];

  constructor(
    public crudApi: CrudService
  ) { }

  ngOnInit(){
    this.crudApi.getProductsList().then(res =>{ 
      console.log('products',res);
      this.products = res;
    })
  }

}
