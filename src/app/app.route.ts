import { Routes, RouterModule } from '@angular/router';
import { BudgetsListComponent } from './budgets-list/budgets-list.component';
import { BudgetDetailsComponent } from './budget-details/budget-details.component';

const routes: Routes = [
  {
    path: 'Budgets',
    component: BudgetsListComponent,
  },
  {
    path: 'Budgets/:id',
    component: BudgetDetailsComponent
  },
  {
    path: '',
    redirectTo: '/Budgets',
    pathMatch: 'full'
  },
];

export const appRouterModule = RouterModule.forRoot(routes);
