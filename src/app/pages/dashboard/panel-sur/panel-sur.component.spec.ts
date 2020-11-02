import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelSurComponent } from './panel-sur.component';

describe('PanelSurComponent', () => {
  let component: PanelSurComponent;
  let fixture: ComponentFixture<PanelSurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelSurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelSurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
