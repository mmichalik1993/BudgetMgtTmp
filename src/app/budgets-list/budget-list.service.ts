import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Http, Response, URLSearchParams, RequestOptionsArgs, Headers, RequestOptions } from '@angular/http';
import {Observable, Operator} from 'rxjs/Rx';
import { Budget } from '../budget';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';


@Injectable() 
export class BudgetListService {

 _addBudgetUrl = "http://localhost:59901/api/Budgets";

  constructor(private http:Http) { }

  getBudgetsAsync(): Observable<Budget[]> {
      const observableResult = this.provideBudgetFromServer();
      return observableResult;
  }

     private Get(data): Observable<Budget[]> {
        return  this.http.get(this._addBudgetUrl, data).map(p => this.handleResponse(p));
    }

    public provideBudgetFromServer(): Observable<Budget[]> {
        return this.Get({ });
    }

    private handleResponse(resp: Response) {
        if (this.isOK(resp))
            return resp.json().map((p)=>{ return {from:new Date(p.From), till: new Date(p.Till), startMoney: p.StartMoney, id: p.Id } as Budget});
         else
            this.error(resp);
    }

    private isOK(resp: Response): boolean {
        return resp.status == 200;
    }

    private error(resp: Response) {
        console.log(resp.statusText);
    }
}
