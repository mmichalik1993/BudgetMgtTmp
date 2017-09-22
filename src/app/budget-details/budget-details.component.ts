import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BudgetDetails } from './budget-details';
import {BudgetDetailsService} from './budget-details.service';
import {Observable, Operator} from 'rxjs/Rx';

@Component({
  selector: 'app-budget-details',
  templateUrl: './budget-details.component.html',
  styleUrls: ['./budget-details.component.css'],
  providers: [BudgetDetailsService]
})
export class BudgetDetailsComponent implements OnInit {

  budgetDetails:BudgetDetails

  constructor(private _route : ActivatedRoute, private _budgetDetailsService :BudgetDetailsService) { }

  ngOnInit() {
    this._route.params.subscribe(params => this.ExtractBudgetDetails(params));
  }

  private ExtractBudgetDetails(params : any ){
          let id = Number.parseInt(params['id']);
          this._budgetDetailsService.getDetailsAsync(id).subscribe(p=> this.InitBudgetDetails(p));
  }

  private InitBudgetDetails(bgDetails:BudgetDetails ){
      this.budgetDetails = bgDetails;
  }
}
