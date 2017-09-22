import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetDetailsCashFlowComponent } from './budget-details-cash-flow.component';

describe('BudgetDetailsCashFlowComponent', () => {
  let component: BudgetDetailsCashFlowComponent;
  let fixture: ComponentFixture<BudgetDetailsCashFlowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetDetailsCashFlowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetDetailsCashFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
