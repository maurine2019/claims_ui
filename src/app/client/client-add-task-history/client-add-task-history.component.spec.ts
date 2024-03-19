import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientAddTaskHistoryComponent } from './client-add-task-history.component';

describe('ClientAddTaskHistoryComponent', () => {
  let component: ClientAddTaskHistoryComponent;
  let fixture: ComponentFixture<ClientAddTaskHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientAddTaskHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientAddTaskHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
