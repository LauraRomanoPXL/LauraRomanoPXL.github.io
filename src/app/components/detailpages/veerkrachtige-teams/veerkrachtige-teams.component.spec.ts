import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeerkrachtigeTeamsComponent } from './veerkrachtige-teams.component';

describe('VeerkrachtigeTeamsComponent', () => {
  let component: VeerkrachtigeTeamsComponent;
  let fixture: ComponentFixture<VeerkrachtigeTeamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeerkrachtigeTeamsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeerkrachtigeTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
