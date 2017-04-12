import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Observable } from 'rxjs';
import { Store, Action } from '@ngrx/store';

@Component({
  selector: 'bp-todo-display',
  templateUrl: './todo-display.component.html',
  styleUrls: ['./todo-display.component.css']
})
export class TodoDisplayComponent implements OnInit {

  @Input() tasksToDisplay: Observable<Array<object>>;
  @Output() taskCompleted = new EventEmitter();
  @Output() taskDeleted = new EventEmitter();

  constructor(private store: Store<any>) { 
 
  }

  ngOnInit() {
    this.tasksToDisplay = this.store.select('todoList');
  }

  completeTask(index) {
    this.store.dispatch({
      type: 'TODO_TASK_COMPLETED',
      payload: index
    });
  }

  deleteTask(index){
    this.store.dispatch({
      type: 'TODO_TASK_DELETED',
      payload: index
    })
  }

  getCompleteStatusText(task){
    if (task.isComplete) {
      return 'Redo';
    } else {
      return 'Complete';
    }
  }

}
