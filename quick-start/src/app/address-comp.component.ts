import { Component, Input } from '@angular/core';
import { Address } from './model';

@Component({
  moduleId: module.id,
  selector: 'address-comp',
  templateUrl: 'address-comp.component.html',
})
export class AddressComponent {
  regions = ['East', 'West', 'South', 'North', 'Midwest'];
  states = ['California', 'Quebec', 'Jalisco', 'Illinois', 'New York'];

  @Input() address: Address;

}
