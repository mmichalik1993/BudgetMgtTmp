import { Component, OnInit, Input } from '@angular/core';
import { ImpactData } from './impact-data';
import { BudgetDetailsImpactsTableService } from './budget-details-impacts-table.service';
@Component({
  selector: 'app-budget-details-impacts-table',
  templateUrl: './budget-details-impacts-table.component.html',
  styleUrls: ['./budget-details-impacts-table.component.css'],
  providers:[BudgetDetailsImpactsTableService]
})

export class BudgetDetailsImpactsTableComponent implements OnInit {

  @Input()
  budgetId:number;
  impacts:ImpactData[];

  constructor(private _budgetDetailsImpactsTableService:BudgetDetailsImpactsTableService) { }

  ngOnInit() {
    this._budgetDetailsImpactsTableService.getImpactsData(this.budgetId).subscribe(p=>this.InitImpactsData(p));
  }

  private InitImpactsData(impData :ImpactData[]){
    this.impacts = impData;
  }
}
