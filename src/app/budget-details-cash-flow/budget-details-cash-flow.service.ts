import { Injectable } from '@angular/core';
import { Component, OnInit, Input } from '@angular/core';
import { Http, Response, URLSearchParams, RequestOptionsArgs, Headers, RequestOptions } from '@angular/http';
import {Observable, Operator} from 'rxjs/Rx';
import { Budget } from '../budget';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { CashFlow } from './cash-flow';
import { ImpactPointInfo } from './impact-point-info';
import { ExpensePointInfo } from './expense-point-info';

@Injectable()
export class BudgetDetailsCashFlowService {

 _addBudgetUrl = "http://localhost:59901/api/CashFlowReport";

  constructor(private _http:Http) {  }

  getReport(id:number):Observable<CashFlow>{
   
    const options:RequestOptionsArgs = {params : {budgetId: id}};
    return this._http.get(this._addBudgetUrl, options).map(p=> this.mapToCashFlow(p));
  }

  private mapToCashFlow(resp:Response):CashFlow{
    const cashFlowData = resp.json();

    return {
        from : new Date(cashFlowData.From),
        till: new Date(cashFlowData.Till),
        impacts: cashFlowData.Impacts.map(p=>this.mapToImpactPointInfo(p)),
        expenses: cashFlowData.Expenses.map(p=>this.mapToExpensePointInfo(p))
    } as CashFlow;
  }

  private mapToImpactPointInfo(impactInfo:any): ImpactPointInfo{
    return { amount : impactInfo.Amount,date: new Date(impactInfo.Date), id:impactInfo.Id} as ImpactPointInfo;
  }

  private mapToExpensePointInfo(expenseInfo:any):ExpensePointInfo{
    return {amount : expenseInfo.Amount, date: new Date(expenseInfo.Date), id:expenseInfo.Id} as ExpensePointInfo;
  }

}
