import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo, removeLastTodo, editTodo, deleteTodo  } from '../../actions';
import Todo from '../Todo';

let TodoList = ({ todos, addTodo, removeLastTodo, edit, deleteTodo }) => {
    console.log(todos);
    const [todoText, setTodoText] = useState('');

    const handleChange = (e) => {
        let text = e.target.value;
        setTodoText(text);
    }

    // const handleEdit = (id) => {
    //    return (text) => {
    //        edit({id, text})}
    // }
    const handleClick = (text) => {
        setTodoText('');
        addTodo({ text });
    }

    return (
        <section className="todos-section">
            <h4>Todos:</h4>
            <div>
                <input type="text" onChange={handleChange} value={todoText} />
                <button onClick={() => handleClick(todoText)}>Add</button>
            </div>
            {todos.map(t => {
                return <Todo
                    key={t.id}
                    text={t.text}
                    id={t.id}
                    handleEdit={edit}
                    handleDelete={() => deleteTodo({id: t.id})}
                />
            })}
            {
                todos.length && <div>
                    <button onClick={removeLastTodo}>Remove Last Todo</button>
                </div>
            }
        </section>
    )
}

const mapStateToProps = state => ({
    todos: state.todos
})

const mapDispatchToProps = (dispatch) => ({
    addTodo: (payload) => dispatch(addTodo(payload)),
    removeLastTodo: () => dispatch(removeLastTodo()),
    edit: (payload) => dispatch(editTodo(payload)),
    deleteTodo: (payload) => dispatch(deleteTodo(payload)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)
