import { Component, OnInit } from '@angular/core';
import { FusionChartsModule } from 'angular-fusioncharts';
import * as FusionCharts from 'fusioncharts';
import { ColorValue } from '@syncfusion/ej2-angular-charts';
import { style } from '@angular/animations';

@Component({
  selector: 'app-analytical-barchart',
  templateUrl: './analytical-barchart.component.html',
  styleUrls: ['./analytical-barchart.component.css']
})
export class AnalyticalBarchartComponent {

  title: string;
  dataSource: Object;
  constructor() {
    //STEP 2 - Chart Data
    this.title = "Savindu Dhamsara"

    const chartData = [
      {
        label: "1/5",
        value: "290",
        color: '#FF5733'
      },
      {
        label: "2/5",
        value: "260",
        color: '#FFC300'
      },
      {
        label: "3/5",
        value: "180",
        color: '#C70039'
      },
      {
        label: "4/5",
        value: "140",
        color: '#900C3F'
      },
      {
        label: "6/5",
        value: "115",
        color: '#581845'
      },
      {
        label: "7/5",
        value: "100",
        color: '#8A2BE2'
      },
      {
        label: "8/5",
        value: "155",
        color: '#008000'
      },
      {
        label: "9/5",
        value: "180",
        color: '#008080'
      },
      {
        label: "10/5",
        value: "30",
        color: '#008080',
      },
      {
        label: "11/5",
        value: "68",
        color: '#008080'
      },
      {
        label: "12/5",
        value: "230",
        color: '#008080'
      },
      {
        label: "13/5",
        value: "130",
        color: '#008080'
      },
      {
        label: "14/5",
        value: "89",
        color: '#008080'
      },
      {
        label: "15/5",
        value: "45",
        color: '#008080'
      }
    ];
    // STEP 3 - Chart Configuration
    const dataSource = {
      chart: {
        //Set the chart caption
        caption: "Total Products with product sales [2022-23]",
        //Set the x-axis name
        xAxisName: "Products",
        //Set the y-axis name
        numberSuffix: "K",
        //Set the theme for your chart
        theme: "fusion",
        plotSpacePercent: "40"
      },
      // Chart Data - from step 2
      data: chartData
    };
    this.dataSource = dataSource;
  }


}
