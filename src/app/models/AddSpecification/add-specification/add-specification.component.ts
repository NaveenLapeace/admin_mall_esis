import { Component, OnInit } from '@angular/core';
import { Form, FormGroup } from '@angular/forms';
import { CrudService } from '../../../shared/crud.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-specification',
  templateUrl: './add-specification.component.html',
  styleUrls: ['./add-specification.component.css']
})
export class AddSpecificationComponent implements OnInit {

  public categoryForm!: FormGroup;
  public brdForm!: FormGroup;
  constructor(   
    public crudAPI: CrudService,
    public fb: FormBuilder,
    ) {}

  ngOnInit() {
    this.cateForm();
    this.brandForm();
  }

  cateForm () {
    this.categoryForm = this.fb.group ({
      name: ['']
    })
  }

  get categoryname () {
    return this.categoryForm.get('name');
  }

  brandForm () {
    this.brdForm = this.fb.group ({
      name: ['']
    })
  }

  get brandname () {
    return this.brdForm.get('name');
  }

  categoryResetForm () {
    this.categoryForm.reset();
  }

  brandResetForm () {
    this.brdForm.reset();
  }

  SubmitCategoryData () {
    this.crudAPI.AddCategories(this.categoryForm.value, '');
    this.categoryResetForm();
  }

  SubmitBrandData () {
    this.crudAPI.AddBrand(this.brdForm.value, "");
    this.brandResetForm();
  }

}
