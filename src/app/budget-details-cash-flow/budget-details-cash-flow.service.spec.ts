import { TestBed, inject } from '@angular/core/testing';

import { BudgetDetailsCashFlowService } from './budget-details-cash-flow.service';

describe('BudgetDetailsCashFlowService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BudgetDetailsCashFlowService]
    });
  });

  it('should ...', inject([BudgetDetailsCashFlowService], (service: BudgetDetailsCashFlowService) => {
    expect(service).toBeTruthy();
  }));
});
