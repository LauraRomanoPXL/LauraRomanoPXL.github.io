import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealdomenGdprComponent } from './realdomen-gdpr.component';

describe('RealdomenGdprComponent', () => {
  let component: RealdomenGdprComponent;
  let fixture: ComponentFixture<RealdomenGdprComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealdomenGdprComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RealdomenGdprComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
