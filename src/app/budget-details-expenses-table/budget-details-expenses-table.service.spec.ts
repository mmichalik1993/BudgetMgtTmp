import { TestBed, inject } from '@angular/core/testing';

import { BudgetDetailsExpensesTableService } from './budget-details-expenses-table.service';

describe('BudgetDetailsExpensesTableService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BudgetDetailsExpensesTableService]
    });
  });

  it('should ...', inject([BudgetDetailsExpensesTableService], (service: BudgetDetailsExpensesTableService) => {
    expect(service).toBeTruthy();
  }));
});
