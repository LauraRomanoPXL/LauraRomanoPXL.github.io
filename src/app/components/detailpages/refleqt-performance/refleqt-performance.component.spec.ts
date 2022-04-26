import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefleqtPerformanceComponent } from './refleqt-performance.component';

describe('RefleqtPerformanceComponent', () => {
  let component: RefleqtPerformanceComponent;
  let fixture: ComponentFixture<RefleqtPerformanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefleqtPerformanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefleqtPerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
