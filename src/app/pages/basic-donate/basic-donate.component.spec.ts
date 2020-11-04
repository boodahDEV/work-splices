import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicDonateComponent } from './basic-donate.component';

describe('BasicDonateComponent', () => {
  let component: BasicDonateComponent;
  let fixture: ComponentFixture<BasicDonateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicDonateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicDonateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
