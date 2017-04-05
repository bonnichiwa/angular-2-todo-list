import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'bp-todo-display',
  templateUrl: './todo-display.component.html',
  styleUrls: ['./todo-display.component.css']
})
export class TodoDisplayComponent implements OnInit {

  @Input() tasksToDisplay: Observable<Array<object>>;
  @Output() taskCompleted = new EventEmitter();
  @Output() taskDeleted = new EventEmitter();

  constructor(private todoService: TodoService, private store: Store<any>) { 
 
  }

  ngOnInit() {
    this.tasksToDisplay = this.todoService.getTasksObservable();
  }

  completeTask(index) {
    this.todoService.completeTask(index);
  }

  deleteTask(index){
    this.todoService.deleteTask(index);
  }

  getCompleteStatusText(task){
    if (task.isComplete) {
      return 'Redo';
    } else {
      return 'Complete';
    }
  }

}
