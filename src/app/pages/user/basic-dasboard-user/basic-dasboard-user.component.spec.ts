import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicDasboardUserComponent } from './basic-dasboard-user.component';

describe('BasicDasboardUserComponent', () => {
  let component: BasicDasboardUserComponent;
  let fixture: ComponentFixture<BasicDasboardUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicDasboardUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicDasboardUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
