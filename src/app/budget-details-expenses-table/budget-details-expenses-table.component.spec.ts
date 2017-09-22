import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetDetailsExpensesTableComponent } from './budget-details-expenses-table.component';

describe('BudgetDetailsExpensesTableComponent', () => {
  let component: BudgetDetailsExpensesTableComponent;
  let fixture: ComponentFixture<BudgetDetailsExpensesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetDetailsExpensesTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetDetailsExpensesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
