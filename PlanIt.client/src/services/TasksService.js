import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class TasksService {
  async getTasks(projectId) {
    const res = await api.get(`api/projects/${projectId}/tasks`)
    logger.log(res.data)
    AppState.tasks = res.data
  }

  async createTask() {

  }

  async editTask() {

  }

  async deleteTask() {

  }
}

export const tasksService = new TasksService