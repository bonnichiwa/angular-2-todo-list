import { Component } from '@angular/core';
import { Store } from'@ngrx/store';
import { TodoService } from'./services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'TODO List Application';

  constructor(private todoService: TodoService, private storeService: Store<any>) {

  }

  ngOnInit() {
    this.todoService.getDefaultTodoList();
  }
  
  addTask(taskInput: string) {
    this.storeService.dispatch({
      type: 'TODO_TASK_ADDED',
      payload: taskInput
    })
  }
}
