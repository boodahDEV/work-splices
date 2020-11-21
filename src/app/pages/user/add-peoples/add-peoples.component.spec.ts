import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPeoplesComponent } from './add-peoples.component';

describe('AddPeoplesComponent', () => {
  let component: AddPeoplesComponent;
  let fixture: ComponentFixture<AddPeoplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPeoplesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPeoplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
