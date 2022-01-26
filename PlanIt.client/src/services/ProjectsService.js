class ProjectsService {
  async getProjects() {
    // TODO get request for logged in user projects
  }

  async createProject(newProject) {
    // TODO add new project to array & router push to new project page 
  }

  async deleteProject(projectId) {
    // TODO Filter from array and router push to main projects page
  }
}

export const projectsService = new ProjectsService()