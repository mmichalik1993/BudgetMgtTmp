import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LienarChartComponent } from './lienar-chart.component';

describe('LienarChartComponent', () => {
  let component: LienarChartComponent;
  let fixture: ComponentFixture<LienarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LienarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LienarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
