import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class TasksService {
  async getTasks(projectId) {
    const res = await api.get(`api/projects/${projectId}/tasks`)
    logger.log(res.data)
    AppState.tasks = res.data
  }

  async createTask(projectId, newTask) {
    const res = await api.post(`api/projects/${projectId}/tasks/`, newTask)
    logger.log(res.data)
    AppState.tasks.push(res.data)
  }

  // async editTask() {

  // }

  async deleteTask(projectId, taskId) {
    await api.delete(`api/projects/${projectId}/tasks/${taskId}`)
    AppState.tasks = AppState.tasks.filter(t => t.id !== taskId)
  }

  async taskCompleted(task) {
    // const completedTask = AppState.tasks.find(t => t.id == task.id)
    task.isComplete = !task.isComplete
    await api.put(`api/projects/${task.projectId}/tasks/${task.id}`, task)
    logger.log(task.isComplete)
  }
}

export const tasksService = new TasksService