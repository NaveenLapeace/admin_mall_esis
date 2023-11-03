import { Component, OnInit, AfterViewInit,ViewEncapsulation, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-brand-charts',
  templateUrl: './brand-charts.component.html',
  styleUrls: ['./brand-charts.component.css']
})
export class BrandChartsComponent implements OnInit {
  // constructor() {}

  ngOnInit() {}
  ngAfterViewInit() {
    const chartCongif: Chart.ChartConfiguration = {
      type: "bar",
      data: {
        labels: [
          "10/2",
          "11/2",
          "12/2",
          "13/2",
          "14/2",
          "15/2",
          "16/2",
          "17/2",
          "18/2"
        ],
        datasets: [
          {
            label: new Date().getFullYear().toString(),
            // backgroundColor: "#E65297",
            borderColor: "#E65297",
            data: [30, 68, 96, 100, 67, 25, 45, 55, 76],
            backgroundColor: [
              "#48D1CC",
              "#20B2AA",
              "#4682B4",
              "#9932CC",
              "#EE82EE",
              "#FF69B4",
              "#FF1493",
              "#DC143C",
              "#FF8C00"
            ],
            fill: false,
            barThickness: 14,
            categoryPercentage: 10,
          },
          // {
          //   label: (new Date().getFullYear() - 1).toString(),
          //   fill: false,
          //   backgroundColor: "#4c51bf",
          //   borderColor: "#4c51bf",
          //   data: [27, 68, 86, 74, 10, 4, 87, 67, 55],
          //   barThickness: 64,
          // },
        ],
      },
      options: {
        maintainAspectRatio: true,
        responsive: true,
        title: {
          display: false,
          text: "Sales Chart",
        },
        tooltips: {
          mode: "index",
          intersect: false,
        },
        plugins: {
          roundedBars: {
            borderRadius: 10, // Set the border radius for the bars
          },
        },
        hover: {
          mode: "nearest",
          intersect: true,
        },
        legend: {
          labels: {
            fontColor: "rgba(0,0,0,.4)",
          },
          align: "end",
          position: "bottom",
        },
        scales: {
          xAxes: [
            {
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Date",
              },
              gridLines: {
                borderDash: [1],
                color: "rgba(33, 37, 31, 0.3)",
                zeroLineColor: "rgba(33, 37, 41, 0.3)",
                zeroLineBorderDash: [],
                zeroLineBorderDashOffset: 2,
              },
            },
          ],
          yAxes: [
            {
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Sales",
              },
              gridLines: {
                borderDash: [1],
                drawBorder: true,
                color: "rgba(33, 37, 41, 0.2)",
                zeroLineColor: "rgba(33, 37, 41, 0.15)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: 2,
              },
            },
          ],
        },
      },
    };
    let ctx: any = document.getElementById("bar-chart");
    ctx = ctx.getContext("2d");
    new Chart(ctx, chartCongif);
  }

  public data: Object[] = [
    { x: 'GER', y: 172 },
    { x: 'RUS', y: 300 },
    { x: 'BRZ', y: 439 },
    { x: 'IND', y: 262 },
    { x: 'CHN', y: 721 },
  ];

  //Initializing Primary X Axis
  public primaryXAxis: Object = {
    valueType: 'Category',
  };

}
