import { Injectable } from '@angular/core';
import { Product } from './product';
import { Brand } from './brand';
import { Category } from './category';
import { finalize } from 'rxjs/operators';

import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,

} from '@angular/fire/compat/database';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Result } from 'postcss';
import { Observable, empty, map } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Payment } from './payment';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  productRef: AngularFirestoreCollection;
  categoryRef: AngularFirestoreCollection;
  brandRef: AngularFirestoreCollection;
  shop2productRef: AngularFirestoreCollection;
  shop2BrandRef: AngularFirestoreCollection;
  shop2categoryRef: AngularFirestoreCollection;

  private brandCollection!: AngularFirestoreCollection<Brand>;
  private shop2brandCollection!: AngularFirestoreCollection<Brand>;
  private categoryCollection!: AngularFirestoreCollection<Category>;

  constructor(
    private db: AngularFireDatabase,
    private firestore: AngularFirestore,
    private storage: AngularFireStorage
    ) {
    this.productRef = firestore.collection('product');
    this.categoryRef = firestore.collection('category');
    this.brandRef = firestore.collection('brand');

    this.shop2BrandRef = firestore.collection('shop2Brands');
    this.shop2categoryRef = firestore.collection('shop2Category');
    this.shop2productRef = firestore.collection('shop2Products');
    

    this.brandCollection = firestore.collection<Brand>('brand');
  }

  generateKey() {
    return this.firestore.createId();
  }

  //Create Products
  AddProduct(Product: Product, shopName: any) {
  if(shopName === 'shop1') {
    Product.Id = this.generateKey(); // Assign the generated ID to the product
    this.productRef.doc(Product.Id).set(Product)
      .then((Product) => {
        console.log("Product Added Successfully: ", Product);
      })
      .catch((error) => {
        console.log("Error occured", error)
      })
  }
  
  if(shopName === 'shop2') {
    Product.Id = this.generateKey(); // Assign the generated ID to the product
    this.shop2productRef.doc(Product.Id).set(Product)
      .then((Product) => {
        console.log("Product Added Successfully: ", Product);
      })
      .catch((error) => {
        console.log("Error occured", error)
      })
  }
 
  }

  AddProducts(product: Product, imageFile: File) {
    const productId = this.generateKey(); // Generate a random ID
    product.Id = productId; // Assign the generated ID to the product
  
    const filePath = `images/${productId}_${imageFile.name}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, imageFile);
  
    task.snapshotChanges()
      .pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((imageUrl: string) => {
            product.imageSet = [imageUrl]; // Assign the image URL as a single-element array
            this.db.object(`/products/${productId}`).set(product)
              .then(() => {
                console.log("Product Added Successfully");
              })
              .catch((error) => {
                console.log("Error occurred", error);
              });
          });
        })
      )
      .subscribe();
  }


  // Add Categories
  AddCategories(Category: Category, shopName: any) {
    if(shopName === 'shop1') {
      Category.categoryId = this.generateKey(); // Assign the generated ID to the product
      this.categoryRef.doc(Category.categoryId).set(Category)
        .then((Category) => {
          console.log("Category Added Successfully: ", Category);
        })
        .catch((error) => {
          console.log("Error occured", error)
        })
    }
    if(shopName === 'shop2') {
      Category.categoryId = this.generateKey(); // Assign the generated ID to the product
    this.shop2categoryRef.doc(Category.categoryId).set(Category)
      .then((Category) => {
        console.log("Category Added Successfully: ", Category);
      })
      .catch((error) => {
        console.log("Error occured", error)
      })
    }
    
  }

  //Add Brand
  AddBrand(Brand: Brand, shopName: any) {
    if(shopName === "shop1" ) {
      Brand.brandId = this.generateKey(); // Assign the generated ID to the brand
      this.brandRef.doc(Brand.brandId).set(Brand)
        .then((brand) => {
          console.log("Brand Added Successfully: ", brand);
          this.subscribeToBrandChanges(Brand.brandId); // Subscribe to real-time updates
        })
        .catch((error) => {
          console.log("Error occurred", error);
        });
    }
    else if(shopName === "shop2") {
      Brand.brandId = this.generateKey(); // Assign the generated ID to the brand
      this.shop2BrandRef.doc(Brand.brandId).set(Brand)
        .then((brand) => {
          console.log("Brand Added Successfully: ", brand);
          this.subscribeToBrandChanges(Brand.brandId); // Subscribe to real-time updates
        })
        .catch((error) => {
          console.log("Error occurred", error);
        });
    }
   
  }

  subscribeToBrandChanges(brandId: string) {
  this.brandRef.doc(brandId).valueChanges()
    .subscribe((brand) => {
      console.log("Real-time Brand Update: ", brand);
      // Perform any necessary operations with the updated brand data
    });
}

  //Get Products
  getProductsList() {
    return new Promise<Product[]>((resolve, reject) => {
      this.firestore
        .collection('product')
        .get()
        .subscribe((result) => {
          if(!result.empty) {
            const products = result.docs.map((doc) => doc.data()) as Product[];
            resolve(products);
          }
          else reject('Could not find result.');
        });
    })
  }

  getProductListByCategory() {
    return new Promise<Product[]>((resolve, reject) => {
      this.firestore.collection('product', ref => ref.where('categoryname', '==', 'Monitors'))
        .get()
        .toPromise()
        .then((result: any) => {
          if (!result.empty) {
            const products = result.docs.map((doc: { data: () => any; }) => doc.data()) as Product[];
            resolve(products);
          } else {
            reject('No products found in the specified category.');
          }
        })
        .catch((error) => {
          reject('Error fetching products: ' + error);
        });
    });
  }

  getShop2ProductsList() {
    return new Promise<Product[]>((resolve, reject) => {
      this.firestore
        .collection('shop2Products')
        .get()
        .subscribe((result) => {
          if(!result.empty) {
            const products = result.docs.map((doc) => doc.data()) as Product[];
            resolve(products);
          }
          else reject('Could not find result.');
        });
    })
  }


  getPaymentsList() {
    return new Promise<Payment[]>((resolve, reject) => {
      this.firestore
        .collection('payment')
        .get()
        .subscribe((result) => {
          if(!result.empty) {
            const payments = result.docs.map((doc) => doc.data()) as Payment[];
            resolve(payments);
          }
          else reject('Could not find result.');
        });
    })
  }

  getPaymentsListByShop(shopName: string) {
    return new Promise<Payment[]>((resolve, reject) => {
      this.firestore.collection('payment', ref => ref.where('shopName', '==', shopName))
        .get()
        .toPromise()
        .then((result: any) => {
          if (!result.empty) {
            const products = result.docs.map((doc: { data: () => any; }) => doc.data()) as Payment[];
            resolve(products);
          } else {
            reject('No products found in the specified category.');
          }
        })
        .catch((error) => {
          reject('Error fetching products: ' + error);
        });
    });
  }

  getProductByID(productId: string) {
    return new Promise<Product[]>((resolve, reject) => {
      this.firestore
          .collection('product')
          .doc(productId)
          .get()
          .subscribe((result) => {
            if(result.exists) {
              const productData = result.data() as Product;
              const product: Product = {...productData};
              resolve([product]);
            }
            else reject('Could not find result');
          });
    })
  }

  getShop2ProductByID(productId: string) {
    return new Promise<Product[]>((resolve, reject) => {
      this.firestore
          .collection('shop2Products')
          .doc(productId)
          .get()
          .subscribe((result) => {
            if(result.exists) {
              const productData = result.data() as Product;
              const product: Product = {...productData};
              resolve([product]);
            }
            else reject('Could not find result');
          });
    })
  }

  getProductsLists(): Promise<Product[]> {
    return new Promise<Product[]>((resolve, reject) => {
      this.firestore.collection('product').get().subscribe((result) => {
        if (!result.empty) {
          const products = result.docs.map((doc) => doc.data()) as Product[];
          const productPromises: Promise<Product>[] = [];
  
          products.forEach((product) => {
            const productId = product.Id;
            const filePath = `images/${productId}_${product.imageSet}`;
            const fileRef = this.storage.ref(filePath);
  
            const productPromise = fileRef.getDownloadURL().toPromise().then((imageUrl) => {
              product.imageSet = imageUrl;
              return product;
            });
  
            productPromises.push(productPromise);
          });
  
          Promise.all(productPromises).then((productsWithUrls) => {
            resolve(productsWithUrls);
          });
        } else {
          reject('Could not find result.');
        }
      });
    });
  }

  getCategoryList () {
    return new Promise<Category[]>((resolve, reject) => {
      this.firestore
        .collection('category')
        .get()
        .subscribe((result) => {
          if(!result.empty) {
            const categories = result.docs.map((doc) => doc.data()) as Category[];
            categories.forEach((category) => console.log("Category Name is: ", category.name));
            resolve(categories);
          }
          else reject("Could not find category");
        })
    })
  }

  getCategoryListByShop (shopName: any) {
    return new Promise<Category[]>((resolve, reject) => {
      if(shopName === 'shop1') {
        this.firestore
        .collection('category')
        .get()
        .subscribe((result) => {
          if(!result.empty) {
            const categories = result.docs.map((doc) => doc.data()) as Category[];
            categories.forEach((category) => console.log("Category Name is: ", category.name));
            resolve(categories);
          }
          else reject("Could not find category");
        })
      }
      if(shopName === 'shop2') {
        this.firestore
        .collection('shop2Category')
        .get()
        .subscribe((result) => {
          if(!result.empty) {
            const categories = result.docs.map((doc) => doc.data()) as Category[];
            categories.forEach((category) => console.log("Category Name is: ", category.name));
            resolve(categories);
          }
          else reject("Could not find category");
        })
      }
      
    })
  }

  getShop2CategoryList () {
    return new Promise<Category[]>((resolve, reject) => {
      this.firestore
        .collection('shop2Category')
        .get()
        .subscribe((result) => {
          if(!result.empty) {
            const categories = result.docs.map((doc) => doc.data()) as Category[];
            categories.forEach((category) => console.log("Category Name is: ", category.name));
            resolve(categories);
          }
          else reject("Could not find category");
        })
    })
  }

  getCategories(): Observable<Category[]> {
    return this.categoryCollection.valueChanges();
  }

  getBrandList () {
    return new Promise<Brand[]>((resolve, reject) => {
      this.firestore
        .collection('brand')
        .get()
        .subscribe((result) => {
          if(!result.empty) {
            const brands = result.docs.map((doc) => doc.data()) as Brand[];
            brands.forEach((brand) => console.log("Brand Name is: ", brand.name));
            resolve(brands);
          }
          else reject("Could not find brand");
        })
    })
  }

  getBrandListByShop (shopName: any) {
    return new Promise<Brand[]>((resolve, reject) => {
      if(shopName === 'shop1') {
        this.firestore
        .collection('brand')
        .get()
        .subscribe((result) => {
          if(!result.empty) {
            const brands = result.docs.map((doc) => doc.data()) as Brand[];
            brands.forEach((brand) => console.log("Brand Name is: ", brand.name));
            resolve(brands);
          }
          else reject("Could not find brand");
        })
      }
      if(shopName === 'shop2') {
        this.firestore
        .collection('shop2Brands')
        .get()
        .subscribe((result) => {
          if(!result.empty) {
            const brands = result.docs.map((doc) => doc.data()) as Brand[];
            brands.forEach((brand) => console.log("Brand Name is: ", brand.name));
            resolve(brands);
          }
          else reject("Could not find brand");
        })
      }
    })
  }


  getShop2BrandList () {
    return new Promise<Brand[]>((resolve, reject) => {
      this.firestore
        .collection('shop2Brands')
        .get()
        .subscribe((result) => {
          if(!result.empty) {
            const brands = result.docs.map((doc) => doc.data()) as Brand[];
            brands.forEach((brand) => console.log("Brand Name is: ", brand.name));
            resolve(brands);
          }
          else reject("Could not find brand");
        })
    })
  }

  getBrandLists(): Observable<Brand[]> {
    return this.db.list<Brand>('brand').valueChanges();
  }

  getBrands(): Observable<Brand[]> {
    return this.brandCollection.valueChanges();
  }


  getCategoryID(categoryName: string) {
    this.firestore
      .collection('category')
      .doc(categoryName)
      .get()
  }

  getBrandID(brandName: string) {

  }

  UpdateProducts(Product: Product, productId: string) {
    this.firestore
      .collection('product')
      .doc(productId)
      .update({
        name: Product.name,
        specification: Product.specifications,
        quantity: Product.quantity,
        price: Product.price,
        imageSet: Product.imageSet
      }  
      );
      console.log(Product);
  }

  updateCategories(Category: Category, categoryId: string) {
    this.firestore
      .collection('category')
      .doc(categoryId)
      .update({
        name: Category.name
      })
      console.log(Category)
  }

  updateBrands(Brands: Brand, brandId: string) {
    this.firestore
      .collection('brand')
      .doc(brandId)
      .update({
        name: Brands.name
      })
      console.log(Brands); 
  }

  

//   UpdateProducts(product: Product, productId: string) {
//   this.firestore
//     .doc(`product/${productId}`)
//     .get()
//     .subscribe((snapshot) => {
//       if (snapshot.exists) {
//         this.firestore
//           .collection('product')
//           .doc(productId)
//           .update({
//            product
//           })
//           .then(() => {
//             console.log('Product details updated successfully');
//           })
//           .catch((error) => {
//             console.error('Error updating product details:', error);
//           });
//       } else {
//         console.log('Document does not exist', productId);
//       }
//     });

//   console.log(product);
// }






  // DeleteProducts(product: Product) {
  //   this.firestore
  //     .collection('product')
  //     .doc(product.Id)
  //     .delete().then(() => {
  //       console.log("Product Deleted", product.Id);
  //     }).catch((error => {
  //       console.log(error);
  //     }));
  // }

  DeleteProducts(productId: string) {
    this.firestore.collection('product').doc(productId).delete();
  }

  DeleteShop2Products(productId: string) {
    this.firestore.collection('shop2Products').doc(productId).delete();
  }

  DeleteCategories(categoryId: string) {
    this.firestore.collection('category').doc(categoryId).delete();
  }

  DeleteBrand(brandId: string) {
    this.firestore.collection('brand').doc(brandId).delete();
  }

  //Add Brands
  // AddBrand (brand: Brand) {
  //   this.productRef.push ({
  //     brandID: brand.brandId,
  //     brandName: brand.name
  //   });
  // }

  //Add Category 
  // AddCategory (category: Category) {
  //   this.productRef.push ({
  //     categoryID: category.categoryId,
  //     categoryName: category.name
  //   });
  // }

  //Fetch Single Product
  // GetProduct(id: string) {
  //   this.productRef = this.db.object('Product-list/' + id);
  //   return this.productRef;
  // }

  //Fetch Multiple Products
  // GetProducts() {
  //   this.productRef = this.db.list('Product-list');
  //   return this.productRef;
  // }

  //Update Products
  // UpdateProduct (product: Product) {
  //   this.productRef.update ({
  //     name: product.name,
  //     specification: product.specification,
  //     price: product.price,
  //     quantity: product.quantity,
  //     imageSet: product.imageSet,
  //   })
  // }

  //Delete Products
  // DeleteProduct (id: string) {
  //   this.productRef = this.db.object('Product-list/' + id);
  //   this.productRef.remove();
  // }
}
