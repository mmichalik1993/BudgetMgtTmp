import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetsComponentComponent } from './budgets-component.component';

describe('BudgetsComponentComponent', () => {
  let component: BudgetsComponentComponent;
  let fixture: ComponentFixture<BudgetsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
