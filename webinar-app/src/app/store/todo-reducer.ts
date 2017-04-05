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
export function todoReducer(state = defaultTask, action: Action){
    switch(action.type) {
        case 'TODO_TASK_COMPLETED':
            // let taskToComplete = state[action.payload];
            // taskToComplete.isComplete = !taskToComplete.isComplete;
            // return state;
            return 3;
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