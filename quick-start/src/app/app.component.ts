import { Component } from '@angular/core';
import { Customer, Address } from './model';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  customer: Customer = {
    id: 1,
    name: 'Alex Smith',
    address: {
      street: '123 Main Street',
      city: 'Los Angeles',
      state: 'California',
      region: 'West',
    }
  };

  hideAddress = false;
}
