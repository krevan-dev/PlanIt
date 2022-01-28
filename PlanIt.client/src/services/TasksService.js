import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class TasksService {
  async getTasks(projectId) {
    const res = await api.get(`api/projects/${projectId}/tasks`)
    // logger.log(res.data)
    AppState.tasks = res.data
  }

  async createTask(projectId, newTask) {
    const res = await api.post(`api/projects/${projectId}/tasks/`, newTask)
    // logger.log(res.data)
    AppState.tasks.push(res.data)
  }












  async editTask(projectId, taskId, newSprintId) {
    AppState.tasks.sprintId = newSprintId
    const res = await api.put(`api/projects/${projectId}/tasks/${taskId}`)
    logger.log(res.data)
  }














  async deleteTask(projectId, taskId) {
    await api.delete(`api/projects/${projectId}/tasks/${taskId}`)
    AppState.tasks = AppState.tasks.filter(t => t.id !== taskId)
  }

  async taskCompleted(task) {
    task.isComplete = !task.isComplete
    await api.put(`api/projects/${task.projectId}/tasks/${task.id}`, task)
    // logger.log(task.isComplete)
  }
}

export const tasksService = new TasksService