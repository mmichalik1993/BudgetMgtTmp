import { TestBed, inject } from '@angular/core/testing';
import { BudgetsServiceService } from './budgets-service.service';

describe('BudgetsServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BudgetsServiceService]
    });
  });

  it('should ...', inject([BudgetsServiceService], (service: BudgetsServiceService) => {
    expect(service).toBeTruthy();
  }));
});
