import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-slide-bar',
  templateUrl: './slide-bar.component.html',
  styleUrls: ['./slide-bar.component.css']
})
export class SlideBarComponent implements OnInit {

  collapseShow = "hidden";
  constructor(
    public router: ActivatedRoute
  ) {}
  shopName!: any;


  ngOnInit() {
    this.shopName = localStorage.getItem('shopName');
  }


  toggleCollapseShow(classes: string) {
    this.collapseShow = classes;
  }

}
