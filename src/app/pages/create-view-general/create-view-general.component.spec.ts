import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateViewGeneralComponent } from './create-view-general.component';

describe('CreateViewGeneralComponent', () => {
  let component: CreateViewGeneralComponent;
  let fixture: ComponentFixture<CreateViewGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateViewGeneralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateViewGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
