import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreinAanHetWerkComponent } from './brein-aan-het-werk.component';

describe('BreinAanHetWerkComponent', () => {
  let component: BreinAanHetWerkComponent;
  let fixture: ComponentFixture<BreinAanHetWerkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreinAanHetWerkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreinAanHetWerkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
