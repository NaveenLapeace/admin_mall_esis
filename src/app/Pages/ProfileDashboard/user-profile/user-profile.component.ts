import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  shopName: any;
  adminFirstName: any;
  adminLastName: any;

  constructor() { }

  ngOnInit(): void {
    this.shopName = localStorage.getItem('shopName');
    this.adminFirstName = localStorage.getItem('adminFirstName');
    this.adminLastName = localStorage.getItem('adminLastName');
  }

}
