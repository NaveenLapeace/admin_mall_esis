import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-plot-chart',
  templateUrl: './product-plot-chart.component.html',
  styleUrls: ['./product-plot-chart.component.css']
})
export class ProductPlotChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  chart: any;
	
	chartOptions = {
	  animationEnabled: true,
	  axisX: {
		labelAngle: -180 
	  },
	  axisY: {
		title: "Sales per day "
	  },
	  toolTip: {
		shared: true
	  },
	  legend:{
		cursor:"pointer",
		itemclick: function(e: any){
		  if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
			e.dataSeries.visible = false;
		  }
		  else {
			e.dataSeries.visible = true;
		  }
		  e.chart.render();
		}
	  },
	  data: [{
		type: "column",	
		name: "Smartphones",
		legendText: "Smartphones",
    color: '#e0176c',
		showInLegend: true, 
		dataPoints:[
		  {label: "2020/1/7", y: 10},
		  {label: "2020/1/14", y: 3},
		  {label: "2020/1/21", y: 5},
		  {label: "2020/1/28", y: 7},
		  {label: "2020/2/4", y: 4},
		  {label: "2020/2/11", y: 4},
		  {label: "2020/2/18", y: 5},
		  {label: "2020/2/25", y: 6},
		  {label: "2020/3/3", y: 3},
		  {label: "2020/3/10", y: 5}
		]
	  }, {
		type: "column",	
		name: "Laptops",
		legendText: "Laptops",
    color: '#17e0dd',
		axisYType: "secondary",
		showInLegend: true,
		dataPoints:[
      {label: "2020/1/7", y: 2},
		  {label: "2020/1/14", y: 2},
		  {label: "2020/1/21", y: 3},
		  {label: "2020/1/28", y: 0},
		  {label: "2020/2/4", y: 1},
		  {label: "2020/2/11", y: 3},
		  {label: "2020/2/18", y: 3},
		  {label: "2020/2/25", y: 1},
		  {label: "2020/3/3", y: 2 },
		  {label: "2020/3/10", y: 2}
		]
	  }]
	}

}
