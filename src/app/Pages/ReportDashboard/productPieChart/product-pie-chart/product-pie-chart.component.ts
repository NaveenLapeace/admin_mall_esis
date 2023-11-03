import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-pie-chart',
  templateUrl: './product-pie-chart.component.html',
  styleUrls: ['./product-pie-chart.component.css']
})
export class ProductPieChartComponent implements OnInit {
  
public totalCountOfLaptopSales = [1,2,6,4,2,5,2,4,3,1,5,1,2,6,4,2,5,2,4,3,1,1,2,6,4,2,5,2,4,3,1,1,2,6,4,2,5,2,4,3,1,
  1,2,6,4,2,5,2,4,3,1,1,2,6,4,2,5,2,4,3,];

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
        const suggestAmount = response.RecommendAmount;
        console.log(response.RecommendAmount);
        sessionStorage.setItem('y', suggestAmount);
        this.chartOptions.data[0].dataPoints[0].y = suggestAmount;
      },
      (error) => {
        // Handle any errors
      }
    );

    this.http.post('http://127.0.0.1:8000/rec_owner', LaptopData).subscribe(
      (response: any) => {
        const suggestAmount = response.RecommendAmount;
        console.log(response.RecommendAmount);
        sessionStorage.setItem('x', suggestAmount);
        this.chartOptions.data[0].dataPoints[0].y = suggestAmount;
      },
      (error) => {
        // Handle any errors
      }
    );
    
  }

  chartOptions = {
	  animationEnabled: true,
	  title:{
		text: "Estimated Quantity"
	  },
	  data: [{
		type: "doughnut",
		yValueFormatString: "#,###.##'%'",
		indexLabel: "{name}",
		dataPoints: [
		  { y: sessionStorage.getItem('x'), name: "Laptops",  color:"#17e0dd" },
		  { y: sessionStorage.getItem('y'), name: "Smartphones", color:"#e0176c" },
		]
	  }]
	}

}
