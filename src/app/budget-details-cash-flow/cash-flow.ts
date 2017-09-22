import { ImpactPointInfo } from './impact-point-info'; 
import { ExpensePointInfo } from './expense-point-info'; 

export class CashFlow {
    from:Date;
    till:Date;
    impacts:ImpactPointInfo[];
    expenses: ExpensePointInfo[];

    get expensesSummary():number {   
        return this.expenses.map(p=>p.amount).reduce((sum, current)=> sum + current);
    }

    get impactsSummary():number{
         return this.impacts.map(p=>p.amount).reduce((sum, current)=> sum + current);
    }
}
