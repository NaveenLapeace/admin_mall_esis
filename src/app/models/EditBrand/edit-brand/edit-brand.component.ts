import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CrudService } from '../../../shared/crud.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-brand',
  templateUrl: './edit-brand.component.html',
  styleUrls: ['./edit-brand.component.css']
})
export class EditBrandComponent implements OnInit {

  public editBrandForm!: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {brandId: string}, 
    private dialogRef: MatDialogRef<EditBrandComponent>,
    public crudAPI: CrudService,
    public fb: FormBuilder
  ) 
  { }

  ngOnInit() {
    this.editBrandData();
  }

  editBrandData () {
    this.editBrandForm = this.fb.group({
      name:['']
    })
  }

  get name() {
    return this.editBrandForm.get('name');
  }

  submitBrandData () {
    this.crudAPI.updateBrands(this.editBrandForm.value, this.data.brandId)
    this.editBrandForm.reset();
  }
  cancelBrand() {
    this.dialogRef.close();
  }

}
