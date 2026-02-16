import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsSummaryComponent } from './analytics-summary.component';

describe('AnalyticsSummaryComponent', () => {
  let component: AnalyticsSummaryComponent;
  let fixture: ComponentFixture<AnalyticsSummaryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyticsSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyticsSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
