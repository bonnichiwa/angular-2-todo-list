import { Component } from '@angular/core';
import { TodoService } from './services/todo.service';
import { Store } from'@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'TODO List Application';
  tasks: Array<object> = [];

  constructor(private todoService: TodoService, private storeService: Store<any>) {

  }
  
  addTask(taskInput: string) {
    this.storeService.dispatch({
      type: 'TODO_TASK_ADDED',
      payload: taskInput
    })
    this.todoService.addTask(taskInput);
  }
}
