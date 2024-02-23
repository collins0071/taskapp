import React, { useEffect, useState, } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const EdiTasks = ({modal, toggle, taskObj, updateTask}) => {

    const [taskName, setTaskName] = useState('')
    const [Description, setDescription] = useState('')


    const handleChange = (e) => {
        const {name, value} = e.target

        if(name === "taskName"){
            setTaskName(value)
        }else {
            setDescription(value)
        }
    }


    useEffect(() => {
      setTaskName(taskObj.Name)
      setDescription(taskObj.Description)
    },[taskObj])

    const handleUpdate = (e) => {
      e.preventDefault();
        let tempObj = {}
        tempObj["Name"] = taskName
        tempObj["Description"] = Description
        updateTask(tempObj)
    }
    // const handleUpdate = (e) => {
    //   e.preventDefault();
    //   let tempObj = {
    //     Name: taskName,
    //     Description: Description
    //   };
    //   updateTask(tempObj);
    // };
    

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Update Tasks</ModalHeader>
        <ModalBody>
         <form>
            <div className="form-group">
                <label>Task Name</label>
                <input 
                type="text" 
                className="form-control"
                value={taskName}
                onChange={handleChange}
                name="taskName"
                />
            </div>
            <div className="form-group">
                <label>Description</label>
                <textarea 
                rows="5" 
                className="form-control"
                value={Description}
                onChange={handleChange}
                name="Description"
                ></textarea>
            </div>
         </form>
        </ModalBody>
        <ModalFooter>
          <Button 
          color="primary" 
          onClick={handleUpdate}>
            Update
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default EdiTasks;