import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicUnirmeComponent } from './basic-unirme.component';

describe('BasicUnirmeComponent', () => {
  let component: BasicUnirmeComponent;
  let fixture: ComponentFixture<BasicUnirmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicUnirmeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicUnirmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
