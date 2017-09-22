import { Component, OnInit } from '@angular/core';
import { Http, Response, URLSearchParams, RequestOptionsArgs, Headers, RequestOptions } from '@angular/http';
import { Observable, Operator } from 'rxjs/Rx';
import { Budget } from './../budget';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {BudgetsServiceService } from './../budgets-service.service'
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { BudgetMgrValidators } from './../validators-module/budget-mgr-validators'
import { DatePickerOptions, DateModel } from 'ng2-datepicker';

@Component({
    selector: 'app-add-budget',
    templateUrl: './add-budget.component.html',
    styleUrls: ['./add-budget.component.css'],
    providers: [BudgetsServiceService]
})

export class AddBudgetComponent implements OnInit {

    errorClassName: string = "error";
    modelForm: FormGroup;

    constructor(private _budgetsService: BudgetsServiceService, private formBuilder: FormBuilder) {
    }

    ngOnInit(): void {

        this.modelForm = this.formBuilder.group({
            startMoney: ['0', Validators.compose([Validators.required, Validators.min(0)])],
            dateRange: this.formBuilder.group({
                from: ['2017-01-01', Validators.compose( [
                    Validators.required
                    ])] ,
                till: ['2017-02-01', Validators.compose( [ 
                    Validators.required])]
                    }
                    ,{ validator: BudgetMgrValidators.dateRangeRequired })           
        });
    }
    
    private MapFormToBudget(form:any):Budget{
            return { startMoney: form.startMoney,
                     from:form.from,
                     till: form.till
                    } as Budget;
    }

    private handleResponse(resp: Response) {
        if (this.isOK(resp))
            this.informAbutSuccess();
        else
            this.informAboutError(resp);
    }

    private isOK(resp: Response): boolean {
        return resp.status == 200;
    }

    private informAbutSuccess() {
        console.log("success");
    }

    private informAboutError(resp: Response) {
        console.log(resp.statusText);
    }

    onSubmit(form): void {
        let budgetToSave:Budget = this.MapFormToBudget(form.value);
       this._budgetsService.saveBudget(budgetToSave).subscribe(p => this.handleResponse(p));
    };

    check(){

        debugger;
    }
}

