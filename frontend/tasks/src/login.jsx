import React, { useState, useEffect } from "react";
import "../styles/tasks.css";
import { taskControllerObj } from "../controller/task.controller";
//import Createtask from "./createtask";

function HomeLayout() {
  const [recipeList, setRecipeList] = useState([]);
  const [isCreate, setIsCreate] = useState(false);

  useEffect(() => {
    async function getRecipe() {
      const response = await taskControllerObj.getAll();
      if (response) {
        setRecipeList(response);
      }
    }
    getRecipe();
  }, []);

  const toggleView = () => {
    setIsCreate(!isCreate);
  };

  return (
    <section className="task-section">
      {isCreate ? (
        <createtask />
      ) : (
        <div className="task-container">
          <button onClick={() => toggleView()}>Create task</button>
          <div className="all-task-container">
            <p>length of task is {recipeList.length}</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default HomeLayout;
