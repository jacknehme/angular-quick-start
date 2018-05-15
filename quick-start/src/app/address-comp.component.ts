import { Component, Input, OnInit } from '@angular/core';
import { Address } from './model';
import { DataService } from './data.service';

@Component({
  moduleId: module.id,
  selector: 'address-comp',
  templateUrl: 'address-comp.component.html',
})
export class AddressComponent implements OnInit {

  constructor(private dataService: DataService) {}

  regions = ['East', 'West', 'South', 'North', 'Midwest'];
  states: string[];

  ngOnInit(){
    this.getStates();
  }

  @Input() address: Address;

  getStates() {
    this.dataService.getStates().subscribe( states => this.states = states );
  }

}
