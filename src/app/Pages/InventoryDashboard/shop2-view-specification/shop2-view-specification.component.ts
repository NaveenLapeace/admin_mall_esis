import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CrudService } from 'src/app/shared/crud.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from 'src/app/shared/product';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ColorValue } from '@syncfusion/ej2-angular-charts';

@Component({
  selector: 'app-shop2-view-specification',
  templateUrl: './shop2-view-specification.component.html',
  styleUrls: ['./shop2-view-specification.component.css']
})
export class Shop2ViewSpecificationComponent implements OnInit {

  
  public viewProductForm!: FormGroup;
  products!: Product[];
  index: any;
  
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {productId: string},
    private dialogRef: MatDialogRef<Shop2ViewSpecificationComponent>,
    public crudAPI: CrudService,
    public fb: FormBuilder
  ) { 
    console.log("Product ID: ", data.productId);
  }
  
  ngOnInit() {
    this.crudAPI.getShop2ProductByID(this.data.productId).then (res => {
      console.log('Products', res);
      this.products = res;
    });
  }
  
  getIconUrl(option: string): string {
    const iconUrls: { [key: string]: string } = {
      Camera: '../../../../../assets/img/camera.svg',
      Ram: '../../../../../assets/img/ram.svg',
      Display: '../../../../../assets/img/phone.svg',
      Battery: '../../../../../assets/img/battery.svg',
      Color: '../../../../../assets/img/color.svg',
      Weight: '../../../../../assets/img/weight.svg',
      Network: '../../../../../assets/img/network.svg',
      Phone: '../../../../../assets/img/phone.svg',
    };

    if (option in iconUrls) {
      return iconUrls[option];
    } else {
      return 'path-to-default-icon.svg';
    }
  }

}
