import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Http, Response, URLSearchParams, RequestOptionsArgs, Headers, RequestOptions } from '@angular/http';
import {Observable, Operator} from 'rxjs/Rx';
import { Budget } from '../budget';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { BudgetDetails } from './budget-details';


@Injectable()
export class BudgetDetailsService {
 _addBudgetUrl = "http://localhost:59901/api/BudgetDetails";
 
  constructor(private http:Http) { 
      
  }
  getDetailsAsync(id:number): Observable<BudgetDetails> {
    const options : RequestOptionsArgs = {params : {id:id}};
    return this.http.get(this._addBudgetUrl,options).map(p=> this.mapToBudgetDetails(p));
  }

  private mapToBudgetDetails(resp:Response ) :BudgetDetails{

    let bgDetails = resp.json();
    return {
      finalBalance: bgDetails.FinalBalance ,
      from: new Date(bgDetails.From), 
      till : new Date(bgDetails.Till), 
      id : bgDetails.Id, 
      startMoney : bgDetails.StartMoney
    } as BudgetDetails;
  }
}
