import { dbContext } from '../db/DbContext'

class ProjectsService {
  async getByCreatorId() {
    throw new Error('Method not implemented.')
  }

  async getByProjectId() {
    throw new Error('Method not implemented.')
  }

  async create(body) {
    await dbContext.Projects.create(body)
    return body
  }

  async remove(id, id) {
    throw new Error('Method not implemented.')
  }
}

export const projectsService = new ProjectsService()
