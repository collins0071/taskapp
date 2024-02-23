import React, { useState, } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const CreateTaks = ({modal, toggle, save}) => {

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

    const handleSave = () => {
        let taskObj = {}
        taskObj["Name"] = taskName
        taskObj["Description"] = Description
        save(taskObj)
    }

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Create Tasks</ModalHeader>
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
          onClick={handleSave}>
            Create
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default CreateTaks;
