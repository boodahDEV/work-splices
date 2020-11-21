import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeTeamComponent } from './make-team.component';

describe('MakeTeamComponent', () => {
  let component: MakeTeamComponent;
  let fixture: ComponentFixture<MakeTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakeTeamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
