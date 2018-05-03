import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
  <h1>{{name}}</h1>
  <p><i>{{name}} is in the {{region}} region</i></p>
  <br/>
  <button (click)="addressClick()">Show/Hide Address</button>  
  <div [hidden]="hideAddress">
    <fieldset>
      <label>Street: </label>{{street}}
    </fieldset>
    <fieldset>
      <label>City: </label>{{city}}
    </fieldset>
    <fieldset>
      <label>Region:   </label>{{region}}
      <select (change)="regionChange($event.target.value)">
        <option>East</option>
        <option>North</option>
        <option>South</option>
        <option>West</option>
      </select>
    </fieldset>
  </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Alex Smith';

  street = '123 Main Street';
  city = 'Los Angeles';
  region = 'East';
  hideAddress = false;

  addressClick() {
    this.hideAddress = !this.hideAddress;
  }

  regionChange(region: string) {
    this.region = region;
  }

}
