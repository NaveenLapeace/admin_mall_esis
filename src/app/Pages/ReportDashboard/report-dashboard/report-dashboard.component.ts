import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-report-dashboard',
  templateUrl: './report-dashboard.component.html',
  styleUrls: ['./report-dashboard.component.css']
})
export class ReportDashboardComponent implements OnInit {

  public suggestAmountForLaptops: any;
  public suggestAmountForPhones: any;

  constructor(
    public http: HttpClient
  ) { }

  ngOnInit(): void {
    const SmartphoneData = {
      product: 'Smartphones',
      prod_qty_list: [
        7,6,8,6,7,9,6,7,9,6,
        9,5,5,8,6,7,9,6,9,5,
        7,2,4,9,6,9,5,6,7,4,
        10,7,3,4,2,1,2,3,4,5,
        1,2,4,5,0,1,4,2,2,1,
        1,1,10,6,8,5,4,2,3,4
      ],
    };

    const LaptopData = {
      product: 'Laptops',
      prod_qty_list: [
        1,2,6,4,2,5,2,4,3,1,
        5,1,2,6,4,2,5,2,4,3,
        1,1,2,6,4,2,5,2,4,3,
        1,1,2,6,4,2,5,2,4,3,
        1,1,2,6,4,2,5,2,4,3,
        1,1,2,6,4,2,5,2,4,3,
      ],
    };

  this.http.post('http://127.0.0.1:8000/rec_owner', SmartphoneData).subscribe(
    (response: any) => {
      this.suggestAmountForPhones = response.RecommendAmount;
      console.log(response.RecommendAmount);
    },
    (error) => {
      // Handle any errors
    }
  );

  this.http.post('http://127.0.0.1:8000/rec_owner', LaptopData).subscribe(
    (response: any) => {
      this.suggestAmountForLaptops = response.RecommendAmount;
      console.log(response.RecommendAmount);
    },
    (error) => {
      // Handle any errors
    }
  );

  }

}
