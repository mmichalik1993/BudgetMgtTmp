import { TestBed, inject } from '@angular/core/testing';

import { BudgetDetailsImpactsTableService } from './budget-details-impacts-table.service';

describe('BudgetDetailsImpactsTableService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BudgetDetailsImpactsTableService]
    });
  });

  it('should ...', inject([BudgetDetailsImpactsTableService], (service: BudgetDetailsImpactsTableService) => {
    expect(service).toBeTruthy();
  }));
});
