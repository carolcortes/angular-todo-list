import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule

import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { NewTaskComponent } from './new-task/new-task.component';


@NgModule({
  declarations: [
    TodoComponent,
    TodoListComponent,
    TodoItemComponent,
    NewTaskComponent,
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    FormsModule,
  ]
})
export class TodoModule { }
