import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-charts',
  templateUrl: './product-charts.component.html',
  styleUrls: ['./product-charts.component.css']
})
export class ProductChartsComponent implements OnInit {

  moneyValue: number = 540000;
  percentageChange: number = 56;
  public selectedShopName!: any;
  shopName!: any

  constructor(
    public router: ActivatedRoute
  ) {}


  ngOnInit( ) {
    this.shopName = localStorage.getItem('shopName');

  }


}
