import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrainjarComponent } from './brainjar.component';

describe('BrainjarComponent', () => {
  let component: BrainjarComponent;
  let fixture: ComponentFixture<BrainjarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrainjarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrainjarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
