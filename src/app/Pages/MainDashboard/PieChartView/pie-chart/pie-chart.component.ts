import { Component, OnInit,  ViewEncapsulation  } from '@angular/core';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { AccumulationChartComponent, AccumulationChart, IAccLoadedEventArgs, AccumulationTheme } from '@syncfusion/ej2-angular-charts';
import { Browser } from '@syncfusion/ej2-base';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
  
  ngOnInit(): void {
  }

  chartOptions = {
	  animationEnabled: true,
	  data: [{
      type: "pie",
      startAngle: -90,
		yValueFormatString: "#,###.##'%'",
		indexLabel: "{name}",
		dataPoints: [
		  { y: 28, name: "Apple", color:"#48D1CC" },
		  { y: 10, name: "Samsung", color:"#20B2AA" },
		  { y: 20, name: "Huawei", color:"#9932CC"  },
		  { y: 15, name: "Redmi", color:"#EE82EE"  },
		  { y: 23, name: "Google Pixel", color:"#FF69B4"  },
		  { y: 17, name: "Xiaomi", color:"#DC143C"  },
		  { y: 12, name: "Nokia", color:"#FF8C00"  }
		]
	  }]
	}
}
