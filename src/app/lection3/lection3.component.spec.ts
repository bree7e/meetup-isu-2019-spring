import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lection3Component } from './lection3.component';

describe('Lection3Component', () => {
  let component: Lection3Component;
  let fixture: ComponentFixture<Lection3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lection3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lection3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
