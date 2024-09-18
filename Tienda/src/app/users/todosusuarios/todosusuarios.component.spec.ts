import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosusuariosComponent } from './todosusuarios.component';

describe('TodosusuariosComponent', () => {
  let component: TodosusuariosComponent;
  let fixture: ComponentFixture<TodosusuariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodosusuariosComponent]
    });
    fixture = TestBed.createComponent(TodosusuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
