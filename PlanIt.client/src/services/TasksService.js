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
    const res = await api.post(`api/projects/${projectId}/tasks`, newTask)
    logger.log(res.data)
    AppState.tasks.push = res.data
  }

  // async editTask() {

  // }

  async deleteTask(projectId, taskId) {
    await api.delete(`api/projects/${projectId}/tasks/${taskId}`)
    AppState.tasks = AppState.tasks.filter(t => t.id !== taskId)
  }
}

export const tasksService = new TasksService