import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EurofinsDockerComponent } from './eurofins-docker.component';

describe('EurofinsDockerComponent', () => {
  let component: EurofinsDockerComponent;
  let fixture: ComponentFixture<EurofinsDockerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EurofinsDockerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EurofinsDockerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
