import React, { useState } from "react";
import { taskControllerObj } from "../controller/task.controller";

function Createtask() {
  const [taskInput, settaskInput] = useState({
    task_name: "",
    task_images: "",
    description: "sdsadsa",
    priority: "",
    time_to_complete: "",
    category: "",
    creator_id: "",
  });

  const onInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    settaskInput({ ...taskInput, [name]: value });
  };

  const create = async () => {
    try {
      console.log(taskInput);
      const response = await taskControllerObj.createtask(taskInput);
      console.log(response);
    } catch (err) {}
  };

  return (
    <section className="creater-section">
      <h1>Create new task</h1>
      <div className="form-group">
        <p>Task Name</p>
        <input type="text" name="task_name" onChange={onInputChange} />
      </div>
      <div className="form-group">
        <p>Task Images</p>
        <input type="text" name="task_images" onChange={onInputChange} />
      </div>
      <div className="form-group">
        <p>Description</p>
        <input type="text" name="description" />
      </div>
      <div className="form-group">
        <p>Priority</p>
        <input type="text" name="priority" onChange={onInputChange} />
      </div>
      <div className="form-group">
        <p>Time to Complete</p>
        <input type="text" name="time_to_complete" onChange={onInputChange} />
      </div>
      <div className="form-group">
        <p>Category</p>
        <input type="text" name="category" onChange={onInputChange} />
      </div>
      <div className="form-group">
        <p>Creator ID</p>
        <input type="text" name="creator_id" onChange={onInputChange} />
      </div>
      <button onClick={() => create()}>Create task</button>
    </section>
  );
}
export default Createtask;
