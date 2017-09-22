import { Component, OnInit } from '@angular/core';
import { Budget } from '../budget';
import { BudgetListService } from './budget-list.service';

@Component({
  selector: 'app-budgets-list',
  templateUrl: './budgets-list.component.html',
  styleUrls: ['./budgets-list.component.css'],
  providers:[BudgetListService]
})

export class BudgetsListComponent implements OnInit {

   budgets:Array<Budget>;

  constructor(private _budgetListService : BudgetListService) { }

  ngOnInit() {
      this._budgetListService.getBudgetsAsync().subscribe(p=> this.InitBudgetsList(p)); 
  }
  
  private InitBudgetsList(budgetsList:Budget[]){
    this.budgets = budgetsList;
  }
  
}
