import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class SprintsService {
  async getSprints(projectId) {
    const res = await api.get(`api/projects/${projectId}/sprints`)
    // logger.log(res.data)
    AppState.sprints = res.data
  }

  async createSprint(projectId, newSprint) {
    const res = await api.post(`api/projects/${projectId}/sprints`, newSprint)
    // logger.log(res.data)
    AppState.sprints.push(res.data)
  }

  async deleteSprint(projectId, sprintId) {
    const res = await api.delete(`api/projects/${projectId}/sprints/${sprintId}`)
    // logger.log(res.data)
    AppState.sprints = AppState.sprints.filter(s => s.id !== sprintId)
  }
}

export const sprintsService = new SprintsService()