import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignUserTaskComponent } from './assign-user-task.component';

describe('AssignUserTaskComponent', () => {
  let component: AssignUserTaskComponent;
  let fixture: ComponentFixture<AssignUserTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignUserTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignUserTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
