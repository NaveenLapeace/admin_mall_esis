import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from "@angular/animations";

@Component({
  selector: 'app-analytical-review',
  templateUrl: './analytical-review.component.html',
  styleUrls: ['./analytical-review.component.css'],
})


export class AnalyticalReviewComponent implements OnInit {

  items = [
    { image: '../../../../../assets/download.jpg', caption: 'Image 1' },
    { image: '../../../../../assets/iphone.jpg', caption: 'Image 2' },
    { image: '../../../../../assets/download.jpg', caption: 'Image 3' },
    // Add more items as needed
  ];
  currentIndex = 0;

  constructor() { }

  ngOnInit() {
    this.showSlide(this.currentIndex);
    setInterval(() => this.nextSlide(), 3000); // Auto-slide every 3 seconds
  }

  showSlide(index: number) {
    this.currentIndex = index;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.items.length;
  }

  prevSlide() {
    this.currentIndex =
      (this.currentIndex - 1 + this.items.length) % this.items.length;
  }

  

}
