import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/Observable/throw';


import { createTestCustomers } from './test-data';
import { LoggerService } from './logger.service';
import { Customer } from './model';

@Injectable()
export class DataService {

    private customersUrl = 'api/customers';
    private statesUrl = 'api/states';

    constructor(
        private loggerService: LoggerService,
        private http: Http,
        //private headers: Headers
    ) {}

    getStates(): Observable<string[]> {
        this.loggerService.log(`Got states as an Observable via Http ...`);
        
        return this.http.get(this.statesUrl)
            .map(response => response._body as string[] )
            .do(states => {
                this.loggerService.log(`Got ${states.length} states`);
            })
            .catch((error: any) => {
                this.loggerService.log(`Error occured ${error}`);
                return Obserable.throw('Something bad happened. Check the console.');
            });
    }

    getCustomers(): Observable<Customer[]> {
        this.loggerService.log(`Got customers as an Observable via Http ...`);
        
        return this.http.get(this.customersUrl)
            .map( response => response._body as Customer[] )
            .do(custs => {
                this.loggerService.log(`Got ${custs.length} customers`);
            })
            .catch((error: any) => {
                this.loggerService.log(`Error occured ${error}`);
                return Obserable.throw('Something bad happened. Check the console.');
            });
    }

    getCustomersP(): Promise<Customer[]> {
        this.loggerService.log(`Got customers as a Promise via Http ...`);
    
        return this.http.get(this.customersUrl)
            .toPromise()
            .then(response => {
                const custs = response._body as Customer[];
                this.loggerService.log(`Got ${custs.length} customers`);
                return custs;
            }, error => {
                this.loggerService.log(`Error occured ${error}`);
                return Promise.reject('Something bad happened. Check the console.');
            });
    }
}
