import { Component, OnInit } from '@angular/core';
import { Form, FormGroup } from '@angular/forms';
import { CrudService } from '../../../shared/crud.service';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-open-categoru-popup',
  templateUrl: './open-categoru-popup.component.html',
  styleUrls: ['./open-categoru-popup.component.css']
})
export class OpenCategoruPopupComponent implements OnInit {

  publicCategoryForm!: FormGroup;
  shopName!: any;

  constructor(    
    public crudAPI: CrudService,
    public fb: FormBuilder,) { }

  ngOnInit(): void {
    this.CategoryForm();
    this.shopName = localStorage.getItem('shopName');
  }

  CategoryForm() {
    this.publicCategoryForm = this.fb.group ({
      name: ['']
    })
  }

  get categoryname () {
    return this.publicCategoryForm.get('name');
  }
  
  categoryResetForm() {
    this.publicCategoryForm.reset();
  }

  SubmitCategoryData () {
    this.crudAPI.AddCategories(this.publicCategoryForm.value, this.shopName);
    this.categoryResetForm();
  }

}
