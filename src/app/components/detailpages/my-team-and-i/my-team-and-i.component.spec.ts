import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTeamAndIComponent } from './my-team-and-i.component';

describe('MyTeamAndIComponent', () => {
  let component: MyTeamAndIComponent;
  let fixture: ComponentFixture<MyTeamAndIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyTeamAndIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTeamAndIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
