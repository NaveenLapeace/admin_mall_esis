import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/shared/crud.service';
import { Payment } from 'src/app/shared/payment';

@Component({
  selector: 'app-payment-table',
  templateUrl: './payment-table.component.html',
  styleUrls: ['./payment-table.component.css']
})
export class PaymentTableComponent implements OnInit {

  payments!: Payment[]
  shopName!: any;

  constructor(
    public crudAPI: CrudService
  ) { }

  ngOnInit() {
    this.shopName = localStorage.getItem('shopName');
    console.log(this.shopName);
    
    this.crudAPI.getPaymentsListByShop(this.shopName).then((res) => {
      this.payments =  res;
    })
  }

}
