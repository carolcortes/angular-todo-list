import { Component, OnInit } from '@angular/core';
import { Todo } from '../shared/models/todo.model';
import { TodoService } from '../shared/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  openTodos: Todo[] = [];
  doneTodos: Todo[] = [];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.loadTodos();
  }

  loadTodos() {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
      this.separateTasks();
    });
  }

  separateTasks() {
    this.openTodos = this.todos.filter(todo => !todo.completed);
    this.doneTodos = this.todos.filter(todo => todo.completed);
  }

  addTodo(newTodoTitle: string) {
    const newTodo: Todo = {
      id: this.todos.length + 1,
      title: newTodoTitle,
      completed: false
    };

    this.todoService.addTodo(newTodo);
    this.separateTasks();
  }

  updateTodo(updatedTodo: Todo) {
    this.todoService.updateTodo(updatedTodo);
    this.separateTasks();
  }

  deleteTodo(todoId: number) {
    this.todoService.deleteTodo(todoId);
    this.separateTasks();
  }

  onTaskChecked(updatedTodo: Todo) {
    this.todoService.updateTodo(updatedTodo);
    this.separateTasks();
  }
}
