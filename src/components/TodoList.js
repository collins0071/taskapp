import React, { useEffect, useState } from "react";
import CreateTaks from "./CreateTaks";
import Card from "./Card";

const TodoList = () => {

    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([]);

    useEffect(() => {
        let arr = localStorage.getItem("taskList")
        // let obj = JSON.parse(arr)
        if (arr) {
            let obj = JSON.parse(arr)
            setTaskList(obj)
        }
    },[]);

    const deleteTask = (index) => {
        let tempList = taskList
        tempList.splice(index, 1)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload();
    }

    const toggle = () => {
        setModal(!modal)
    }

    const saveTask = (taskObj) => {
        let tempList = taskList
        tempList.push(taskObj)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        setModal(false)
    }

    const updateListArray = (obj, index) => {
      let tempList = taskList
      tempList[index] = obj
      localStorage.setItem("taskList", JSON.stringify(tempList))
      setTaskList(tempList)
      window.location.reload()
    }

  return (
    <div>
      <div className="header text-center">
        <h3>Todo app</h3>
        <button
         onClick={() => setModal(true)} 
        className="btn btn-primary">Create Task </button>
      </div>

      <div className="task-container">
       {taskList.map((obj, index) => 
       <Card 
       taskObj={obj} 
       index={index} 
       deleteTask={deleteTask}
       updateListArray={updateListArray}
       />)}
    
      </div>
      <CreateTaks 
        toggle={toggle} 
        modal={modal}
        save={saveTask}
        />
    </div>
  );
};

export default TodoList;
