import React, { useState } from "react";
import EdiTasks from "./EditTask";

const Card = ({ taskObj, index, deleteTask, updateListArray }) => {

    const [modal, setModal] = useState(false);

  const colors = [
    {
      primaryColor: "#5D93E1",
      secondaryColor: "#ECF3FC",
    },
    {
      primaryColor: "#F9D288",
      secondaryColor: "#FEFAF1",
    },
    {
      primaryColor: "#5DC250",
      secondaryColor: "#F2FAF1",
    },
    {
      primaryColor: "#F48687",
      secondaryColor: "#FDF1F1",
    },
    {
      primaryColor: "#B964F7",
      secondaryColor: "#F3F0FD",
    },
  ];

  const handleDelete = () => {
    deleteTask(index);
  };

  const toggle = () => {
    setModal(!modal)
  }

  const updateTask = (obj) => {
    updateListArray(obj, index)
  }
 
  return (
    <div className="card-wrapper mt-5">
      <div
        className="card-top"
        style={{ backgroundColor: colors[index % 5].primaryColor }}
      ></div>
      <div className="task-holder">
        <span
          className="card-header"
          style={{
            backgroundColor: colors[index % 5].secondaryColor,
            borderRadius: "10px",
          }}
        >
          {taskObj.Name}
        </span>
        <p className="mt-2">{taskObj.Description}</p>

        <div
          style={{
            position: "absolute",
            right: "10px",
            bottom: "20px",
          }}
        >
          <i
            className="far fa-edit"
            onClick={() => setModal(true)}
            style={{
              color: colors[index % 5].primaryColor,
              marginRight: "10px",
              cursor: "pointer",
              
            }}
          ></i>
          <i
            className="far fa-trash-alt"
            style={{ color: colors[index % 5].primaryColor, cursor: "pointer" }}
            onClick={handleDelete}
          ></i>
        </div>
      </div>
      <EdiTasks 
      modal={modal}
      toggle={toggle}
      updateTask={updateTask}
      taskObj={taskObj}
      />
    </div>
  );
};

export default Card;
