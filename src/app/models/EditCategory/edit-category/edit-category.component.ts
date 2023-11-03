import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CrudService } from '../../../shared/crud.service';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {

  public editCategoryForm!: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {categoryId: string},
    private dialogRef: MatDialogRef<EditCategoryComponent>,
    public crudAPI: CrudService,
    public fb: FormBuilder
  ) { }

  ngOnInit() {
    this.editCategoryData();
  }

  editCategoryData() {
    this.editCategoryForm = this.fb.group({
      name: ['']
    })
  }

  get name() {
    return this.editCategoryForm.get('name');
  }

  submitCategoryData() {
    this.crudAPI.updateCategories(this.editCategoryForm.value, this.data.categoryId)
    this.editCategoryForm.reset();
  }

  cancelCategory () {
    this.dialogRef.close();
  }

}
