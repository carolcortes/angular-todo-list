import { Component } from '@angular/core';
import { TodoService } from '../../shared/services/todo.service';
import { Todo } from '../../shared/models/todo.model';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent {
  newTaskTitle: string = '';

  constructor(private todoService: TodoService) { }

  addTask() {
    if (this.newTaskTitle.trim() !== '') {
      const newTodo: Todo = {
        id: this.todoService.getTodoNewId(),
        title: this.newTaskTitle,
        completed: false
      };

      this.todoService.addTodo(newTodo);
      this.newTaskTitle = '';
    }
  }
}
