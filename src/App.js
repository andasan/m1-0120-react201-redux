import React, {useState} from 'react';
import './App.css';
import ToDoList from './components/ToDoList'
import {ToDosContext} from './context/ToDosContext';

function App() {
  const [toDoList, setToDoList] = useState([
    {id: 1, content: "Buy Eggs", isDone: false},
    {id: 2, content: "Buy Milk", isDone: false}
  ]);

  return (
    <ToDosContext.Provider value={{toDoList, setToDoList}}>
      <div className="container">
        <h1 className="center blue-text">Todo's</h1>
        <ToDoList />
      </div>
    </ToDosContext.Provider>
  );
}

export default App;
