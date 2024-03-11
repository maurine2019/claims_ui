import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksDefaultComponent } from './tasks-default.component';

describe('TasksDefaultComponent', () => {
  let component: TasksDefaultComponent;
  let fixture: ComponentFixture<TasksDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TasksDefaultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TasksDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
