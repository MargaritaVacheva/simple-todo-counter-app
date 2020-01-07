import React from 'react';
import CounterList from './components/CounterList';
import TodoList from './components/TodoList';
import './App.css'; 


function App() {
  return (
    <div className="App">
      <TodoList />
      <CounterList />
    </div>
  );
}

export default App;
