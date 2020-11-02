import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffialLoginComponent } from './offial-login.component';

describe('OffialLoginComponent', () => {
  let component: OffialLoginComponent;
  let fixture: ComponentFixture<OffialLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffialLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffialLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
