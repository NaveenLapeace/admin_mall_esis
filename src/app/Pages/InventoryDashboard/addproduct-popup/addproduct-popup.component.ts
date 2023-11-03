import { Component, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {NgIf} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AddSpecificationComponent } from 'src/app/models/AddSpecification/add-specification/add-specification.component';
import { EditBrandComponent } from 'src/app/models/EditBrand/edit-brand/edit-brand.component';
import { OpenBrandPopupComponent } from 'src/app/Pages/InventoryDashboard/open-brand-popup/open-brand-popup.component';
import { OpenCategoruPopupComponent } from 'src/app/Pages/InventoryDashboard/open-categoru-popup/open-categoru-popup.component';
import { OpenProductPopupComponent } from 'src/app/Pages/InventoryDashboard/open-product-popup/open-product-popup.component';

@Component({
  selector: 'app-addproduct-popup',
  templateUrl: './addproduct-popup.component.html',
  styleUrls: ['./addproduct-popup.component.css']
})

export class AddproductPopupComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  OpenBrandPopup(): void {
    const dialogRef = this.dialog.open(OpenBrandPopupComponent);
  }

  OpenCategoryPopup(): void {
    const dialogRef = this.dialog.open(OpenCategoruPopupComponent);
  }

  OpenProductPopup(): void {
    const dialogRef = this.dialog.open(OpenProductPopupComponent);
  }

  ngOnInit(): void {
  }

  onNoClick() {
    
  }
}
