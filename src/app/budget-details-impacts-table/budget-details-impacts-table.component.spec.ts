import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetDetailsImpactsTableComponent } from './budget-details-impacts-table.component';

describe('BudgetDetailsImpactsTableComponent', () => {
  let component: BudgetDetailsImpactsTableComponent;
  let fixture: ComponentFixture<BudgetDetailsImpactsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetDetailsImpactsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetDetailsImpactsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
