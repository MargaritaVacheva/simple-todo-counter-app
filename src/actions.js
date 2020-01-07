import {ADD_COUNTER, REMOVE_LAST_COUNTER, INCREMENT, DECREMENT, CLEAR } from './actionTypes';
import {ADD_TODO, REMOVE_LAST_TODO, EDIT_TODO, DELETE_TODO } from './actionTypes';

//counters actions
const addCounter =  () => {
    return {
        type: ADD_COUNTER
    }
}

const removeLastCounter = () => {
    return {
        type: REMOVE_LAST_COUNTER
    }
}

let incrementCounter = (id) => {
    return {
        type: INCREMENT,
        id
    }
}

const decrementCounter = (id) => {
    return {
        type: DECREMENT,
        id
    }
}

const clearCounter = (id) => {
    return {
        type: CLEAR,
        id
    }
}

//todos actions

const addTodo = (payload) => {
    return {
        type: ADD_TODO,
        payload
    }
}

const removeLastTodo = () => {
    return {
        type: REMOVE_LAST_TODO,
    }
}

const editTodo = (payload) => {
    return {
        type: EDIT_TODO,
        payload
    }
}

const deleteTodo = (payload) => {
    return {
        type: DELETE_TODO,
        payload
    }
}

export { addCounter, removeLastCounter, incrementCounter, decrementCounter, clearCounter,
    addTodo, removeLastTodo, editTodo, deleteTodo };