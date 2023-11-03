import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CrudService } from '../../../shared/crud.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  public editProductForm!: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {productId: string}, 
    private dialogRef: MatDialogRef<EditProductComponent>,
    public crudAPI: CrudService,
    public fb: FormBuilder) {
      console.log("product ID: ", data.productId);
     }

  ngOnInit() {
    this.editProductData();
    console.log(this.data.productId);
  }

  editProductData () {
    this.editProductForm = this.fb.group({
      name: [''],
      specification: [''],
      price: [''],
      quantity: [''],
      imageSet: ['']
    })
    
  }

  get name () {
    return this.editProductForm.get('name');
  }

  get specification () {
    return this.editProductForm.get('specification');
  }

  get price () {
    return this.editProductForm.get('price');
  }

  get quantity () {
    return this.editProductForm.get('quantity');
  }

  get imageSet () {
    return this.editProductForm.get('imageSet');
  }

  submitEditProductData () {
    this.crudAPI.UpdateProducts(this.editProductForm.value, this.data.productId);
    this.editProductForm.reset();
  }

  cancelForm() {
    this.dialogRef.close();
  }
}
