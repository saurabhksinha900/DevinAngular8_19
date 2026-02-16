import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsExportComponent } from './analytics-export.component';

describe('AnalyticsExportComponent', () => {
  let component: AnalyticsExportComponent;
  let fixture: ComponentFixture<AnalyticsExportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyticsExportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyticsExportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
