import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, Validators } from '@angular/forms';
import { CrudService } from '../../../shared/crud.service';
import { FormBuilder } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-open-brand-popup',
  templateUrl: './open-brand-popup.component.html',
  styleUrls: ['./open-brand-popup.component.css']
})
export class OpenBrandPopupComponent {

  publicBrandForm!: FormGroup;
  shopName!: any;

  constructor(
    public crudAPI: CrudService,
    public fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.shopName = localStorage.getItem('shopName');
    this.BrandForm();
  }

  BrandForm () {
    this.publicBrandForm = this.fb.group ({
      name: new FormControl ('')
    })
  }

  get brandname () {
    return this.publicBrandForm.get('name');
  }

  brandResetForm () {
    this.publicBrandForm.reset();
  }

  SubmitBrandData() {
    this.crudAPI.AddBrand(this.publicBrandForm.value, this.shopName);
    this.brandResetForm();
  }

  // FormData: FormGroup;
  // dropdownOptions: string[] = ['Option 1', 'Option 2', 'Option 3'];
  
  // constructor(private fb: FormBuilder) {
  //   this.FormData = this.fb.group({
  //     dropdowns: this.fb.array([])
  //   });
  // }

  // get dropdowns() {
  //   return this.FormData.get('dropdowns') as FormArray;
  // }

  // addDropdown() {
  //   const dropdownGroup = this.fb.group({
  //     option: [''],
  //     value: ['']
  //   });
  //   this.dropdowns.push(dropdownGroup);
  // }

  // removeDropdown(index: number) {
  //   this.dropdowns.removeAt(index);
  // }


  // displayValues() {
  //   const values = this.dropdowns.value;
  //   console.log(values);
  // }

}
