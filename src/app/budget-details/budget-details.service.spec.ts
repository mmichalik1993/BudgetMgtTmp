import { TestBed, inject } from '@angular/core/testing';

import { BudgetDetailsService } from './budget-details.service';

describe('BudgetDetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BudgetDetailsService]
    });
  });

  it('should ...', inject([BudgetDetailsService], (service: BudgetDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
