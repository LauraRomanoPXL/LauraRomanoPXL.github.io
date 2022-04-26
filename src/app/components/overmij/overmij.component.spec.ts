import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OvermijComponent } from './overmij.component';

describe('OvermijComponent', () => {
  let component: OvermijComponent;
  let fixture: ComponentFixture<OvermijComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OvermijComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OvermijComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
