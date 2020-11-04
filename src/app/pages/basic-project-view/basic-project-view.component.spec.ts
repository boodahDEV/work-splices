import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicProjectViewComponent } from './basic-project-view.component';

describe('BasicProjectViewComponent', () => {
  let component: BasicProjectViewComponent;
  let fixture: ComponentFixture<BasicProjectViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicProjectViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicProjectViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
