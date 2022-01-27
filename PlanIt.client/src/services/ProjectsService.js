import { AppState } from "../AppState"
import { api } from "./AxiosService"

class ProjectsService {
  async getProjects(query = '') {
    const res = await api.get('api/projects/' + query)
    console.log(res.data)
    AppState.projects = res.data
  }
  async getProjectById(projectId) {
    const res = await api.get('api/projects/' + projectId)
    console.log(res.data)
    AppState.activeProject = res.data
  }

  async createProject(newProject) {
    const res = await api.post('api/projects', newProject)
    console.log(res.data)
    AppState.projects.unshift(res.data)
  }

  async deleteProject(projectId) {
    // TODO Filter from array and router push to main projects page
  }
}

export const projectsService = new ProjectsService()