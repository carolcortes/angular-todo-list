import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: Todo[] = [
    { id: 1, title: 'make an awesome angular todo-list', completed: false },
    { id: 2, title: 'deploy my awesome angular todo-list project on github.io', completed: false },
  ];

  getTodos(): Observable<Todo[]> {
    return of(this.todos);
  }


  addTodo(newTodo: Todo): void {
    this.todos.push(newTodo);
  }

  updateTodo(updatedTodo: Todo): void {
    const index = this.todos.findIndex(todo => todo.id === updatedTodo.id);
    if (index !== -1) {
      this.todos[index] = updatedTodo;
    }
  }

  deleteTodo(todoId: number): void {
    const index = this.todos.findIndex(todo => todo.id === todoId);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
  }
}