import { AppState } from "../AppState"
import { api } from "./AxiosService"

class ProjectsService {
  async getProjects(query = '') {
    const res = await api.get('api/projects/' + query)
    // console.log(res.data)
    AppState.projects = res.data
  }
  async getProjectById(projectId) {
    const res = await api.get('api/projects/' + projectId)
    // console.log(res.data)
    AppState.activeProject = res.data
  }

  async createProject(newProject) {
    const res = await api.post('api/projects', newProject)
    // console.log(res.data)
    AppState.projects.push(res.data)
    return res.data.id
  }

  async deleteProject(projectId) {
    await api.delete('api/projects/' + projectId)
    AppState.projects = AppState.projects.filter(p => p.id !== projectId)
  }
}

export const projectsService = new ProjectsService()