import React, { useState } from 'react';

const Todo = ({ id, text, handleEdit, handleDelete }) => {
    const [todoText, setTodoText] = useState(text);
    const [isEditing, setIsEditing] = useState(false);

    const handleChange = (e) => {
        let text = e.target.value;
        setTodoText(text);
    }

    const handleStartEdit = () => {
        setIsEditing(true);
    }

    const handleCancel = () => {
        setTodoText(text);
        setIsEditing(false)
    }

    const handleDone = () => {
        handleEdit( { id, text: todoText});
        setIsEditing(false);
    }

    return (
        <div>
            <input type="text" onChange={handleChange} value={todoText} />
            {!isEditing ?
                <button onClick={handleStartEdit}>Edit</button> :
                <>
                    <button onClick={handleDone}>Done</button>
                    <button onClick={handleCancel}>Cancel</button>
                </>
            }
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
}

export default Todo;