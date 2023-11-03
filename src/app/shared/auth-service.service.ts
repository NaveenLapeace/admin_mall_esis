import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(
    private afAuth: AngularFireAuth, 
    private http: HttpClient,
    private router: Router,
    private firestore: AngularFirestore,
  ) { }

  signUp(email: string, password: string, shop: string, firstName: string, lastName: string) {
    console.log(shop);
    
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user) {
          this.firestore.collection(shop === 'shop1' ? 'shop1Admins' : 'shop2Admins').doc(user.uid).set({ 
            id: user.uid,
            firstName: firstName,
            lastName: lastName,
            shop: shop, 
          });
        }
      })
      .catch((error) => {
        console.log('Error signing up:', error);
      });
  }

  signInShop1(email: string, password: string) {
    this.afAuth.signInWithEmailAndPassword(email, password)
     .then((res:any) => {
       localStorage.setItem('token', 'true');
       const uid = res.user?.uid;
       if (uid) {
         firebase.firestore().collection('shop1Admins').doc(uid).get()
           .then((doc: firebase.firestore.DocumentSnapshot<firebase.firestore.DocumentData>) => {
             if (doc.exists) {
               const data = doc.data();
               if (data && data['shop'] === 'shop1') {
                 console.log(data['shop'], [uid]);
                 localStorage.setItem('adminFirstName', data['firstName']);
                 localStorage.setItem('adminLastName', data['lastName']);
                 this.router.navigate(['/dashboard'], {queryParams:{AdminID: uid}});
               } else {
                 alert("Inavlid Username or Password");
                 window.location.reload();
               }
             } else {
               // Handle document not found
             }
           })
           .catch((error: any) => {
             console.log(error);
             throw error;
           });
       } else {
         throw new Error('User authentication failed.');
       }
     })
     .catch((err:any) => {
       alert(err.message);
       this.router.navigate(['/signin']);
     });
 }

 signInShop2(email: string, password: string) {
  this.afAuth.signInWithEmailAndPassword(email, password)
   .then((res:any) => {
     localStorage.setItem('token', 'true');
     const uid = res.user?.uid;
     console.log(uid);
     
     if (uid) {
       firebase.firestore().collection('shop2Admins').doc(uid).get()
         .then((doc: firebase.firestore.DocumentSnapshot<firebase.firestore.DocumentData>) => {
           if (doc.exists) {
             const data = doc.data();
             if (data && data['shop'] === 'shop2') {
               console.log(data['shop'], [uid]);
               localStorage.setItem('adminFirstName', data['firstName']);
               localStorage.setItem('adminLastName', data['lastName']);
               this.router.navigate(['/dashboard'], {queryParams:{AdminID: uid}});
             } else {
               alert("Inavlid Username or Password");
               window.location.reload();
             }
           } else {
             // Handle document not found
           }
         })
         .catch((error: any) => {
           console.log(error);
           throw error;
         });
     } else {
       throw new Error('User authentication failed.');
     }
   })
   .catch((err:any) => {
     alert(err.message);
     this.router.navigate(['/signin']);
   });
}


  signOutApp() {
    this.afAuth.signOut()
      .then(() => {
        localStorage.removeItem('token');
        this.router.navigate(['/signin']);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }
}
 