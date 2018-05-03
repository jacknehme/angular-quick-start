import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
  <h1>{{name}}</h1>
  <p><i>{{name}} is at {{street}} in {{city}} in the {{region}} region</i></p>
  <br/>

  <fieldset>
    <label>Name: <input [(ngModel)]="name"/></label><br/>
  </fieldset>

  <label><input type="checkbox" [(ngModel)]="hideAddress"/> Hide Address</label>

  <div [hidden]="hideAddress">
    <fieldset>
      <label>Street: <input [(ngModel)]="street"/></label>
    </fieldset>
    <fieldset>
      <label>City: <input [(ngModel)]="city"/></label>
    </fieldset>
    <fieldset>
      <label>Region: <select [(ngModel)]="region">
                      <option>East</option>
                      <option>North</option>
                      <option>South</option>
                      <option>West</option>
                     </select>
      </label>
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
}
