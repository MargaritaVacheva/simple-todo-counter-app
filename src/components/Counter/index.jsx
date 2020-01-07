import React from 'react';

const Counter = ({ value, id, handleIncrement, handleDecrement, handleClear }) => {
    // console.log(value)
    // console.log(id)
    return (
        <section>
            <p>value: {value}</p>
            <button onClick={handleIncrement}>INCREMENT</button>
            <button onClick={handleDecrement}>DECREMENT</button>
            <button onClick={handleClear}>CLEAR</button>
        </section>
    );
}

export default Counter;
