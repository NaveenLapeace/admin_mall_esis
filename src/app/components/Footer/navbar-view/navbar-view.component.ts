import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar-view',
  templateUrl: './navbar-view.component.html',
  styleUrls: ['./navbar-view.component.css']
})
export class NavbarViewComponent implements OnInit {
  test: Date = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
