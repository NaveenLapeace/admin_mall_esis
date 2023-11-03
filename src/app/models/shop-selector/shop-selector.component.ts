import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop-selector',
  templateUrl: './shop-selector.component.html',
  styleUrls: ['./shop-selector.component.css']
})
export class ShopSelectorComponent implements OnInit {

  constructor(    private router: Router,) { }

  ngOnInit(): void {
  }

  routetoShop1Dashboard() {
    this.router.navigate(['shop1-signin']);
    localStorage.setItem('shopName', "shop1");
  }

  routetoShop2Dashboard() {
    this.router.navigate(['shop2-signin']);
    localStorage.setItem('shopName', "shop2");
  }
}
