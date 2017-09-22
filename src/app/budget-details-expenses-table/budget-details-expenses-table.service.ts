import { Injectable } from '@angular/core';
import { Component, OnInit, Input } from '@angular/core';
import { Http, Response, URLSearchParams, RequestOptionsArgs, Headers, RequestOptions } from '@angular/http';
import {Observable, Operator} from 'rxjs/Rx';
import { Budget } from '../budget';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { ExpenseData } from './expense-data';

@Injectable()
export class BudgetDetailsExpensesTableService {

 _addBudgetUrl = "http://localhost:59901/api/Expenses";
  constructor(private _http:Http) { }

  getExpensesData(budgetId:number):Observable<ExpenseData[]>{
    const options :RequestOptionsArgs ={params:{budgetId:budgetId}};
    return this._http.get(this._addBudgetUrl, options).map(p=>this.mapToExpenseDataCollection(p));
  }

  private mapToExpenseDataCollection(resp:Response):ExpenseData[]{
      const data  = resp.json();
      return data.map(p=> this.mapToExpenseData(p));
  }

   private mapToExpenseData(expData:any): ExpenseData {
        return {
        amount : expData.Amount,
        date : expData.Date,
        description: expData.Description,
        id:expData.Id,
        name:expData.Name
      } as ExpenseData
   }

}
