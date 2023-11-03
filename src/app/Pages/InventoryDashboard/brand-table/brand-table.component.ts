import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../../shared/crud.service';
import { MatDialog } from '@angular/material/dialog';
import { EditBrandComponent } from '../../../models/EditBrand/edit-brand/edit-brand.component';
import { Brand } from '../../../shared/brand';

@Component({
  selector: 'app-brand-table',
  templateUrl: './brand-table.component.html',
  styleUrls: ['./brand-table.component.css']
})
export class BrandTableComponent implements OnInit {

  brand!: Brand[];
  shopName!: any;

  constructor(
    public crudApi: CrudService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {

    
    this.shopName = localStorage.getItem('shopName');

    if(this.shopName === 'shop1') {
      this.crudApi.getBrandList().then((res) => {
        this.brand = res
      })
    }
    if(this.shopName === 'shop2') {
      this.crudApi.getShop2BrandList().then((res) => {
        this.brand = res
      })
    }
  
  }

  removeBrand(brandId: string) {
    this.crudApi.DeleteBrand(brandId);
  }

  openBrandDetail(brandId: string) {
    const brandRef = this.dialog.open (EditBrandComponent, {
      data: {brandId},
    })

    brandRef.afterClosed().subscribe((result => {
      console.log("Category Box Closed");
    }))
  }

}
