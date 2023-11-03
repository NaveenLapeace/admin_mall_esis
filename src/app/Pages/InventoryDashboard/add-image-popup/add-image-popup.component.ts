import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/shared/product';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { CrudService } from 'src/app/shared/crud.service';

@Component({
  selector: 'app-add-image-popup',
  templateUrl: './add-image-popup.component.html',
  styleUrls: ['./add-image-popup.component.css']
})
export class AddImagePopupComponent implements OnInit {

  categoryName!: string;
  brandName!: string;
  productName!: string;
  Ram!: string;
  Memory!: string;
  Display!: string;
  Camera!: string;
  Battery!: string;
  prices!: any;
  product!: Product
  public productForm!: FormGroup;
  loading !: boolean;
  valueList !: any[];
  brandList: string[] = ['samsung', 'apple', 'nokia'];
  categoryList!: ['smartphone','laptops', 'tablets'];
  shopName!: any;
  
  constructor(
    public http : HttpClient,
    private firestorage: AngularFireStorage,
    public crudAPI: CrudService,
    public fb: FormBuilder,
  ) {

  }

  ngOnInit() {
    this.loading = true
    this.studForm();
    this.shopName = localStorage.getItem('shopName');
  }

  get specifications(): FormArray {
    return this.productForm.get('specifications') as FormArray;
  }
  
  addSpecificationControl(option: string, value: number) {
    const specificationGroup = this.fb.group({
      option: [option],
      value: [value]
    });
    this.specifications.push(specificationGroup);
  }

  studForm () {
    this.productForm = this.fb.group ({
      productname: [''],
      specifications: this.fb.array([]),
      price: [''],
      quantity: [''],
      imageSet: [''],
      categoryname: [''],
      brandname: [''],
    });

    const specificationlist = ['Display', 'Camera', 'Ram', 'Memory', 'Battery'];
    this.valueList = [this.Display, this.Camera, this.Ram, this.Memory, this.Battery] ;

    for(let i = 0; i<5; i++) {
      this.addSpecificationControl(specificationlist[i], this.valueList[i]);
    }
  }


  get productname () {
    return this.productForm.get('productname');
  }

  get categoryname () {
    return this.productForm.get('categoryname');
  }

  get brandname () {
    return this.productForm.get('brandname');
  }

  get quantity () {
    return this.productForm.get('quantity');
  }

  get price() {
    return this.productForm.get('price');
  }

  get camera () {
    return this.productForm.get('camera');
  }
  get ram() {
    return this.productForm.get('ram');
  }

  get memory() {
    return this.productForm.get('memory');
  }

  get display () {
    return this.productForm.get('display');
  }

  get battery () {
    return this.productForm.get('battery');
  }


  url1 = 'https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp';
  
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

  handleFileInput(event: any) {
    if (event.target.files) {
      const reader1 = new FileReader(); // Use separate variable name
      reader1.readAsDataURL(event.target.files[0]);
      reader1.onload = (event: any) => { // Use separate variable name
        this.url1 = event.target.result;
      };

      const files = event.target.files[0]
      const formData = new FormData();
      formData.append('file', files);
      this.loading = false;
  
    this.http.post('http://127.0.0.1:8000/ocr', formData).subscribe(
      (response: any) => {
        this.loading = true;
        const characters = response.Characters;
        const charaterArray = characters.split(',');
        console.log(charaterArray);
        for(let i=0; i< 10; i++){
          if(charaterArray[i] < 16) {
            this.Ram = `${charaterArray[i]} GB`;
          }
          if(charaterArray[i] > 64 && charaterArray[i] < 256) {
            this.Memory = charaterArray[i];
          }
          if(charaterArray[i] > 4000) {
            this.prices = charaterArray [i];
          }
          if(charaterArray[i] in this.brandList) {            
            this.brandName = charaterArray[i];
            console.log(this.brandName);
          }
        }
        this.categoryName = charaterArray[0];
        this.brandName = charaterArray[0];
        this.productName = charaterArray[1] + '' + charaterArray[2];
        this.prices = charaterArray [9];
        // this.Ram = `${charaterArray[6]} GB`;
        // this.Memory = charaterArray[21];
        this.Battery = charaterArray[35];
        this.Camera = charaterArray[34];
        this.Display = charaterArray[33];
      },
      (error) => {
        // Handle any errors
      }
    );
    }
    
  }

  SubmitProductData() {
    this.onFileChange();
    this.crudAPI.AddProduct(this.productForm.value, this.shopName);
    this.ResetForm();
  }

  ResetForm () {
    const values = this.productForm.value;
    console.log(values);

    this.productForm.reset();
  }
  

}
