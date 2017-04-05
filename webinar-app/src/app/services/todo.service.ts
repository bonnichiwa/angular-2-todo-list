import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class TodoService {
  tasks: Array<object> = [];
  taskEmitter : BehaviorSubject<Array<Object>> = new BehaviorSubject([]);
  
  constructor() { 
    this.addTask('task 1');
    this.addTask('task 2');
    this.addTask('task 3');
    this.taskEmitter.next(this.tasks);
  }

  getTasksObservable() {
    return this.taskEmitter;
  }

  addTask(taskInput: string) {
    this.tasks.push({
      label: taskInput,
      isComplete: false
    });
  }

  completeTask(index: number) {
    let taskToComplete: any = this.tasks[index];
    taskToComplete.isComplete = !taskToComplete.isComplete;
 }

  deleteTask(index: number) {   
    this.tasks.splice(index, 1);
  }

}
