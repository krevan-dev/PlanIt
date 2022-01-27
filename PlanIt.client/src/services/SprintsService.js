import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class SprintsService {
  async getSprints(projectId) {
    const res = await api.get(`api/projects/${projectId}/sprints`)
    logger.log(res.data)
    AppState.sprints = res.data
  }

  async createSprint(newSprint) {

  }

  async deleteSprint(projectId, sprintId) {

  }
}

export const sprintsService = new SprintsService()