import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelCentralComponent } from './panel-central.component';

describe('PanelCentralComponent', () => {
  let component: PanelCentralComponent;
  let fixture: ComponentFixture<PanelCentralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelCentralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelCentralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
