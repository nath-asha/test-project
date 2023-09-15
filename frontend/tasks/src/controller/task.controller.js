import axios from "axios";

class taskController {
  async getAll() {
    try {
      const response = await axios.get("http://localhost:8080/api/recipes");
      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {}
  }

  async createtask(taskInput) {
    try {
      const data = taskInput;
      const response = await axios.post(
        "http://localhost:8080/api/recipes",
        data
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
}

export const taskControllerObj = new taskController();
