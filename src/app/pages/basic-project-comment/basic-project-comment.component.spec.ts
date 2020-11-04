import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicProjectCommentComponent } from './basic-project-comment.component';

describe('BasicProjectCommentComponent', () => {
  let component: BasicProjectCommentComponent;
  let fixture: ComponentFixture<BasicProjectCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicProjectCommentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicProjectCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
