import { combineReducers } from 'redux';
import { ADD_COUNTER, REMOVE_LAST_COUNTER, INCREMENT, DECREMENT, CLEAR } from './actionTypes';
import { ADD_TODO, REMOVE_LAST_TODO, EDIT_TODO, DELETE_TODO } from './actionTypes';

function counters(store = [], action) {
    let indexOfCounter = store.findIndex(c => c.id === action.id);
    if (indexOfCounter < 0) return store;
    switch (action.type) {
        case INCREMENT:
            return [...store.slice(0, indexOfCounter),
            { ...store[indexOfCounter], value: store[indexOfCounter].value + 1 },
            ...store.slice(indexOfCounter + 1)];
        case DECREMENT:
            return [...store.slice(0, indexOfCounter),
            { ...store[indexOfCounter], value: store[indexOfCounter].value - 1 },
            ...store.slice(indexOfCounter + 1)];
        case CLEAR:
            return [...store.slice(0, indexOfCounter),
            { ...store[indexOfCounter], value: 0 },
            ...store.slice(indexOfCounter + 1)];
        default:
            return store;
    }
}

function countersApp(store = [{id: 1, value: 0 }], action) {
    switch (action.type) {
        case ADD_COUNTER:
            console.log(store)
            return [...store, { id: Date.now(), value: 0 }] ;
        case REMOVE_LAST_COUNTER:
            return store.slice(0, store.length - 1);
        case INCREMENT:
        case DECREMENT:
        case CLEAR:
            return counters(store, action);
        default:
            return store;
    }
}

function todos(store, action) {
    let indexOfTodo = store.findIndex(t => t.id === action.payload.id);
    if (indexOfTodo < 0) return store;
    switch (action.type) {
        case EDIT_TODO:
            return [...store.slice(0, indexOfTodo),
            { ...store[indexOfTodo], text: action.payload.text },
            ...store.slice(indexOfTodo + 1)];
        case DELETE_TODO:
            return [...store.slice(0, indexOfTodo),
            ...store.slice(indexOfTodo + 1)];
        default:
            return store;
    }
}

function todosApp(store = [], action) {
    switch (action.type) {
        case ADD_TODO:
            console.log(store)
            return  [...store, { id: Date.now(), text: action.payload.text }] ;
        case REMOVE_LAST_TODO:
            return store.slice(0, store.length - 1) ;
        case EDIT_TODO:
        case DELETE_TODO:
            return todos(store, action);
        default:
            return store;
    }
}


let generatorReducer = combineReducers({
    counters: countersApp,
    todos: todosApp});

export default generatorReducer;