import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RCCUComponent } from './rccu.component';

describe('RCCUComponent', () => {
  let component: RCCUComponent;
  let fixture: ComponentFixture<RCCUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RCCUComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RCCUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
