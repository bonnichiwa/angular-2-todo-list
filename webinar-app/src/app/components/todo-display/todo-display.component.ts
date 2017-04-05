import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'bp-todo-display',
  templateUrl: './todo-display.component.html',
  styleUrls: ['./todo-display.component.css']
})
export class TodoDisplayComponent implements OnInit {

  @Input() tasksToDisplay: BehaviorSubject<Array<object>>;
  @Output() taskCompleted = new EventEmitter();
  @Output() taskDeleted = new EventEmitter();

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.tasksToDisplay = this.todoService.getTasksObservable();
  }

  completeTask(index) {
    this.todoService.completeTask(index);
    this.tasksToDisplay = this.todoService.getTasksObservable();
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
