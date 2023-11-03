import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../../shared/crud.service';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Product } from '../../../shared/product';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { MatSelectChange } from '@angular/material/select';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  public productForm!: FormGroup;
  categories: any;
  brand: any;
  shopName!: any;
  selectedValue: any;
  selectedBrandValue: any;
  selectedOption!: string;
  options: string[] = ['Memory', 'Display', 'Ram', 'Battery', 'Camera', 'Weight', 'Color', 'Network'];
  dropdownOptions: string[] = ['Memory', 'Display', 'Ram', 'Battery', 'Camera', 'Weight', 'Color', 'Network'];

  public FormData!: FormGroup;

  constructor(
    public crudAPI: CrudService,
    public fb: FormBuilder,
    private firestorage: AngularFireStorage,
  ) {  
    this.FormData = this.fb.group({
    dropdowns: this.fb.array([])
  });}

  ngOnInit(){
    // this.crudAPI.GetProducts ();
    // this.studForm(this.selectedValue);
    this.shopName = localStorage.getItem('shopName');
    
    this.studForm();
    this.categoryDropDownList();
    this.brandDropDownList();
  }

  // onSelectionChange(event: any): void {
  //   this.selectedValues = event.target.value;
  //   console.log(this.selectedValues);
  // }
  
  onOptionSelected (option: string) {
    this.selectedOption = option;
  }

  addItem(){
    (this.FormData.get('quantities') as FormArray).push (
      this.fb.control(null)
    )
  }

  get specifications(): FormArray {
    return this.productForm.get('specifications') as FormArray;
  }

  addSpecificationControl() {
    const specificationGroup = this.fb.group({
      option: [''],
      value: ['']
    });
    this.specifications.push(specificationGroup);
  }

  removeSpecificationControl(index: number) {
    this.specifications.removeAt(index);
  }
  
  studForm () {
    this.productForm = this.fb.group ({
      name: [''],
      specifications: this.fb.array([]),
      price: [''],
      quantity: [''],
      imageSet: [''],
      categoryname: [''],
      brandname: [''],
    });

    this.addSpecificationControl();
  }

  categoryDropDownList() {
    this.crudAPI.getCategoryListByShop(this.shopName).then((CategoryData: any) => {
      this.categories  = CategoryData;
    });
  }

  brandDropDownList() {
    this.crudAPI.getBrandListByShop(this.shopName).then((BrandData: any) => {
      this.brand = BrandData;
    });
  }

  async onFileChange() {
    const file = document.getElementById('imageFile') as HTMLInputElement;
    if (file && file.files && file.files.length > 0) {
      const selectedFile = file.files[0];
      const path = `Product Images/${selectedFile.name}`;
      const uploadTask = await this.firestorage.upload(path, selectedFile);
      const url = await uploadTask.ref.getDownloadURL();
      console.log(url);
  
      // Update the imageSet control value in the productForm
      this.productForm.patchValue({
         imageSet: url
      });
    }
  }

  get name () {
    return this.productForm.get('name');
  }

  get specification () {
    return this.productForm.get('specification');
  }

  get price () {
    return this.productForm.get('price');
  }

  get quantity () {
    return this.productForm.get('quantity');
  }

  get imageSet () {
    return this.productForm.get('imageSet');
  }

  get categoryname() {
    return this.productForm.get('categoryname');
  }

  get brandname() {
    return this.productForm.get('brandname');
  }

  get option () {
    return this.productForm.get('option');
  }

  get value () {
    return this.productForm.get('value');
  }

  ResetForm () {
    const values = this.productForm.value;
    console.log(values);

    this.productForm.reset();
  }

  SubmitProductData() {
      this.onFileChange();
      this.crudAPI.AddProduct(this.productForm.value, this.shopName);
      this.ResetForm();
  }

  // SubmitProductData() {
  //   const imageFileInput = document.getElementById('image-address') as HTMLInputElement | null;
  //   if (imageFileInput && imageFileInput.files && imageFileInput.files.length > 0) {
  //     const imageFile = imageFileInput.files[0];
  //     this.crudAPI.AddProducts(this.productForm.value, imageFile);
  //   } else {
  //     this.crudAPI.AddProduct(this.productForm.value);
  //   }
  //   this.ResetForm();
  // }
}
