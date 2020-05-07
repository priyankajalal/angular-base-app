import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Plan401Component } from './plan401.component';

describe('Plan401Component', () => {
  let component: Plan401Component;
  let fixture: ComponentFixture<Plan401Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Plan401Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Plan401Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
