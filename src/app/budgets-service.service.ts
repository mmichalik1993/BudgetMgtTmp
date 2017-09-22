import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Http, Response, URLSearchParams, RequestOptionsArgs, Headers, RequestOptions } from '@angular/http';
import {Observable, Operator} from 'rxjs/Rx';
import { Budget } from './budget';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';


@Injectable()
export class BudgetsServiceService {

    constructor(private http: Http) { }

    _addBudgetUrl = "http://localhost:59901/api/Budgets"
  
    private Post(data): Observable<Response> {
        let response = this.http.post(this._addBudgetUrl, data);
        response.subscribe(p => this.handleResponse(p));
        return response;
    }

    private createDataToSend(budget: Budget) {
        return { From: budget.from, Till: budget.till, StartMoney: budget.startMoney };
    }

    public saveBudget(budget: Budget): Observable<Response> {
        return this.Post(this.createDataToSend(budget));
    }

    private handleResponse(resp: Response) {
        if (this.isOK(resp))
            this.success();
        else
            this.error(resp);
    }

    private isOK(resp: Response): boolean {
        return resp.status == 200;
    }

    private success() {
        console.log("service - success");
    }

    private error(resp: Response) {
        console.log(resp.statusText);
    }

}
