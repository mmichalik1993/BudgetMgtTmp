import { Component, OnInit, Injectable } from '@angular/core';
import { Budget } from '../budget'

@Injectable()
export class  BudgetsListService {

budgets: Array<Budget> = [{id:1, startMoney:0, from : new Date(2017,1,1), till : new Date(2017,2,1)},
                          {id:1, startMoney:0, from : new Date(2017,2,1), till : new Date(2017,3,1)}
                          ] ;
  getAll(): Array<Budget>{ 
   return  this.budgets;
  }
 
  get(id:number){
    this.budgets.find(p=>p.id === id);
  }
}

@Component({
  selector: 'app-budgets-component',
  templateUrl: './budgets-component.component.html',
  styleUrls: ['./budgets-component.component.css'],
  providers: [BudgetsListService]
})

export class BudgetsComponentComponent implements OnInit {

  constructor(private _budgetListService : BudgetsListService) { }

  ngOnInit() {
  }

   budgets()  :Array<Budget> {
     return this._budgetListService.getAll();  
  }

}