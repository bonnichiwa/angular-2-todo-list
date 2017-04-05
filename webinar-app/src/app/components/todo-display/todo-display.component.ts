import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'bp-todo-display',
  templateUrl: './todo-display.component.html',
  styleUrls: ['./todo-display.component.css']
})
export class TodoDisplayComponent implements OnInit {

  @Input() taskToDisplay: Array<object>;
  @Output() taskCompleted = new EventEmitter();
  @Output() taskDeleted = new EventEmitter();

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.taskToDisplay = this.todoService.getTasks();
  }

  completeTask(index) {
    this.todoService.completeTask(index);
    this.taskToDisplay = this.todoService.getTasks();
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
