import { Component, OnInit, Input } from '@angular/core';
import { ExpenseData } from './expense-data';
import { BudgetDetailsExpensesTableService } from './budget-details-expenses-table.service';

@Component({
  selector: 'app-budget-details-expenses-table',
  templateUrl: './budget-details-expenses-table.component.html',
  styleUrls: ['./budget-details-expenses-table.component.css'],
  providers:[BudgetDetailsExpensesTableService]
})
export class BudgetDetailsExpensesTableComponent implements OnInit {
 @Input()
  budgetId:number;
  expenses:ExpenseData[];

  constructor(private _budgetDetailsExpensesTableService:BudgetDetailsExpensesTableService) { }

  ngOnInit() {
    this._budgetDetailsExpensesTableService.getExpensesData(this.budgetId).subscribe(p=>this.InitExpensesData(p));
  }

  private InitExpensesData(expData :ExpenseData[]){
    this.expenses = expData;
  }

}
