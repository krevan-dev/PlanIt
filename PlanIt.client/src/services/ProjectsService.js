import { AppState } from "../AppState"
import { api } from "./AxiosService"

class ProjectsService {
  async getProjects(query = '') {
    const res = await api.get('api/projects' + query)
    console.log(res.data)
    // AppState.projects = res.data
  }

  async createProject(newProject) {
    // TODO add new project to array & router push to new project page 
  }

  async deleteProject(projectId) {
    // TODO Filter from array and router push to main projects page
  }
}

export const projectsService = new ProjectsService()