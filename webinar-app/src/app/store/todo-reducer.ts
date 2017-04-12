import { Action } from '@ngrx/store';

let defaultTask = [
    getTask('task 1'),
    getTask('task 2'),
    getTask('task 3')
]

function getTask(taskInput: string){
    return {
        label: taskInput,
        isComplete: false
    }
}
export function todoReducer(state = [], action: Action){
    switch(action.type) {
        case 'DEFAULT_TODO_LIST_LOADED':
            return state.concat(action.payload);
        case 'TODO_TASK_COMPLETED':
            //
            return state;
        case 'TODO_TASK_DELETED':
            //
            return state;
        case 'TODO_TASK_ADDED':
            let label = action.payload;
            let task = {
                label: label,
                isComplete: false
            }
            return state.concat(task);
        default:
            return state;   
    }
}