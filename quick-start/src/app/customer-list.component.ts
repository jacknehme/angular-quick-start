import { Component, OnInit } from '@angular/core';
import { Customer } from './model';

import { DataService } from './data.service';
import { LoggerService } from './logger.service';

@Component({
  moduleId: module.id,
  selector: 'customer-list',
  templateUrl: 'customer-list.component.html',
  styleUrls: ['customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  constructor(private dataService: DataService,
    private loggerService: LoggerService) { }

  customers: Customer[];
  customer: Customer;
  isBusy = false;

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers() {
    this.isBusy = true;
    this.loggerService.log('Getting customers ... ');
    // this.customers = this.dataService.getCustomers();

    // this.dataService.getCustomersP()
    //   .then(cust => {
    //     this.isBusy = false;
    //     this.customers = cust;
    //   });

    this.dataService.getCustomers()
      .subscribe(cust => {
        this.isBusy = false;
        this.customers = cust;
      });
  }


  shift(increment: number) {
    let ix = this.customers.findIndex(c => c === this.customer) + increment;
    ix = Math.min(this.customers.length - 1, Math.max(0, ix));
    this.customer = this.customers[ix];
  }

}
