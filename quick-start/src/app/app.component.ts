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

  <fieldset>
    <img [src]="image"/>
  </fieldset>
  <label [style.color]=color>Favorite Color</label>
  <button (click)=clicked()>Toggle Color</button>
  <select #selector (change)="colorChange(selector.value)">
    <option>red</option>
    <option>blue</option>
    <option>green</option>
  </select>
  <select (change)="colorChange($event.target.value)">
    <option>red</option>
    <option>blue</option>
    <option>green</option>
  </select>
  <div>
  <button (click)="addressClick()">Show Address</button>
  </div>
  <div [hidden]="hideAddress">
    <div>{{street}}</div>
    <div>{{city}}</div>
  </div>
  <div>Region: {{region}}
    <select (change)="regionChange($event.target.value)">
      <option>East</option>
      <option>North</option>
      <option>South</option>
      <option>West</option>
    </select>
  </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Alex Smith';
  image = 'favicon.ico';
  color = 'red';

  street = '123 Main Street';
  city = 'Los Angeles';
  region = 'East';
  hideAddress = false;

  addressClick() {
    this.hideAddress = !this.hideAddress;
  }
  clicked() {
    this.color = this.color === 'red' ? 'blue' : 'red';
  }

  regionChange(region: string) {
    this.region = region;
  }

  colorChange(color: string) {
    this.color = color;
  }

}
