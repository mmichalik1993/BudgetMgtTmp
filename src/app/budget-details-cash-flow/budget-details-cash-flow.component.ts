import { Injectable } from '@angular/core';
import { Component, OnInit, Input } from '@angular/core';
import { Http, Response, URLSearchParams, RequestOptionsArgs, Headers, RequestOptions } from '@angular/http';
import {Observable, Operator} from 'rxjs/Rx';
import { CashFlow } from './cash-flow';
import { ImpactPointInfo } from './impact-point-info';
import { ExpensePointInfo } from './expense-point-info';
import { BudgetDetailsCashFlowService } from './budget-details-cash-flow.service';
import { ChartSeries } from '../lienar-chart/chart-series';
import { ChartPoint } from '../lienar-chart/chart-point';


@Component({
  selector: 'app-budget-details-cash-flow',
  templateUrl: './budget-details-cash-flow.component.html',
  styleUrls: ['./budget-details-cash-flow.component.css'],
  providers:[BudgetDetailsCashFlowService]
})
export class BudgetDetailsCashFlowComponent implements OnInit {

 @Input() budgetId: number;

 title:"Title";
 cashFlow:CashFlow;
 series:ChartSeries;

  constructor(private _budgetDetailsCashFlowService:BudgetDetailsCashFlowService) { }

  ngOnInit() {
    this._budgetDetailsCashFlowService.getReport(this.budgetId).subscribe(p=> this.InitCashFlow(p));
  }

  private InitCashFlow(cashFlow :CashFlow){
    this.cashFlow = cashFlow;
    this.InitSeries();
  }

  private InitSeries(){
    const points:ChartPoint[] = this.cashFlow.impacts.map(p=>this.mapToChartPoint(p));
    this.series = {points : points} as ChartSeries;

  }

  private mapToChartPoint(impact: ImpactPointInfo):ChartPoint{
      return {date:impact.date, value: impact.amount} as ChartPoint;
  }
}
