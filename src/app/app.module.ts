import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ValidatorsModule } from './validators-module/validators-module'; 

import { AppComponent } from './app.component';
import { BudgetsComponentComponent } from './budgets-component/budgets-component.component';
import { AddBudgetComponent } from './add-budget/add-budget.component';
import { BudgetsListComponent } from './budgets-list/budgets-list.component';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { DatePickerModule } from 'ng2-datepicker';
import { DateValueAccessorModule } from 'angular-date-value-accessor';

import { appRouterModule } from "./app.route";
import { BudgetDetailsComponent } from './budget-details/budget-details.component';
import { BudgetDetailsCashFlowComponent } from './budget-details-cash-flow/budget-details-cash-flow.component';
import { BudgetDetailsImpactsTableComponent } from './budget-details-impacts-table/budget-details-impacts-table.component';
import { BudgetDetailsExpensesTableComponent } from './budget-details-expenses-table/budget-details-expenses-table.component';
import { LienarChartComponent } from './lienar-chart/lienar-chart.component';

@NgModule({
    declarations: [
        AppComponent,
        BudgetsComponentComponent,
        AddBudgetComponent,
        BudgetsListComponent,
        ErrorMessageComponent,
        BudgetDetailsComponent,
        BudgetDetailsCashFlowComponent,
        BudgetDetailsImpactsTableComponent,
        BudgetDetailsExpensesTableComponent,
        LienarChartComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ReactiveFormsModule,
        DatePickerModule,
        DateValueAccessorModule,
        appRouterModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
