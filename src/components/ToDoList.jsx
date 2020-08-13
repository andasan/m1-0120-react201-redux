import React, { useState, useContext } from "react";
import ToDos from "./ToDos";
import AddForm from "./AddForm";
import FilterButtons from "./FilterButtons";
import { ToDosContext } from "../context/ToDosContext";

//git clone <url> -b <branch-name> <---- to clone a specific branch
//cd <
//yarn or npm install
//cmd + shift + .

const ToDoList = () => {
  const [filterValue, setFilterValue] = useState("SHOW_ALL");
  const { toDoList, setToDoList } = useContext(ToDosContext);

  const addToDo = (content) => {
    content.id = Math.random(); //uuid
    content.isDone = false;
    setToDoList((prevState) => [...prevState, content]);
  };

  const doneToDo = (id) => {
    const tempList = toDoList.map((item) => {
      item.id === id && (item.isDone = !item.isDone);
      return item;
    });
    setToDoList(tempList);
  };

  const deleteToDo = (id) => {
    const newArray = toDoList.filter((item) => {
      return item.id !== id;
    });
    setToDoList(newArray);
  };

  const filterFunc = (action) => {
    setFilterValue(action);
  };

  const getVisibleToDos = (toDoList, filterValue) => {
    switch (filterValue) {
      case "SHOW_COMPLETED":
        return toDoList.filter((item) => item.isDone);
      case "SHOW_ACTIVE":
        return toDoList.filter((item) => !item.isDone);
      case "SHOW_ALL":
        return toDoList;
      default:
        break;
    }
  };

  const visibleList = getVisibleToDos(toDoList, filterValue);

  return (
    <>
      <FilterButtons filterFunc={filterFunc} filterValue={filterValue} />
      <ToDos
        toDoList={visibleList}
        doneToDo={doneToDo}
        deleteToDo={deleteToDo}
      />
      <AddForm addToDo={addToDo} />
    </>
  );
};

export default ToDoList;
