import React from 'react';
import { connect } from 'react-redux';
import { addCounter, removeLastCounter, incrementCounter, decrementCounter, clearCounter } from '../../actions';
import Counter from '../Counter'

let CounterList = ({ counters, addCounter, removeLastCounter, increment, decrement, clear }) => {
    console.log(counters);
    return (
        <section className="counters-section">
            <h4>Counters:</h4>
            {counters.map(c => {
                return <Counter
                    key={c.id}
                    value={c.value}
                    id={c.id}
                    handleIncrement={() => increment(c.id)}
                    handleDecrement={() => decrement(c.id)}
                    handleClear={() => clear(c.id)}
                />
            })}
            <div>
                <button onClick={addCounter}>Add Counter</button>
                <button onClick={removeLastCounter}>Remove Counter</button>
            </div>
        </section>
    )
}

const mapStateToProps = state => ({
    counters: state.counters
})

const mapDispatchToProps = (dispatch )=> ({
    addCounter: () => dispatch(addCounter()),
    removeLastCounter: () => dispatch(removeLastCounter()),
    increment: (id) => dispatch(incrementCounter(id)),
    decrement: (id) => dispatch(decrementCounter(id)),
    clear: (id) => dispatch(clearCounter(id)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CounterList)
