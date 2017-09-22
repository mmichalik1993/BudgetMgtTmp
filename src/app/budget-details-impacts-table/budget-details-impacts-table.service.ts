import { Injectable } from '@angular/core';
import { Component, OnInit, Input } from '@angular/core';
import { Http, Response, URLSearchParams, RequestOptionsArgs, Headers, RequestOptions } from '@angular/http';
import {Observable, Operator} from 'rxjs/Rx';
import { Budget } from '../budget';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { ImpactData } from './impact-data';

@Injectable()
export class BudgetDetailsImpactsTableService {

    _addBudgetUrl = "http://localhost:59901/api/Impacts";
  constructor(private _http:Http) { }

  getImpactsData(budgetId:number):Observable<ImpactData[]>{
    const options :RequestOptionsArgs ={params:{budgetId:budgetId}};
    return this._http.get(this._addBudgetUrl, options).map(p=>this.mapToImpactDataCollection(p));
  }

  private mapToImpactDataCollection(resp:Response):ImpactData[]{
      const data  = resp.json();
      return data.map(p=> this.mapToImpactData(p));
  }

   private mapToImpactData(impactData:any): ImpactData {
        return {
        amount : impactData.Amount,
        date : impactData.Date,
        description: impactData.Description,
        id:impactData.Id,
        name:impactData.Name
      } as ImpactData
   }
}
