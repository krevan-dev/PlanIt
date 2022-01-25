import { BadRequest } from '@bcwdev/auth0provider/lib/Errors'
import { dbContext } from '../db/DbContext'

class ProjectsService {
  async getByCreatorId(creatorId) {
    const project = await dbContext.Projects.find({ creatorId: creatorId }).populate('creator')
    if (!project) {
      throw new BadRequest('Invalid Creator Id')
    }
    return project
  }

  async getByProjectId(projectId) {
    const project = await dbContext.Projects.findById(projectId).populate('creator')
    if (!project) {
      throw new BadRequest('Invalid Project Id')
    }
    return project
  }

  async create(body) {
    const project = await dbContext.Projects.create(body)
    return project
  }

  async remove(projectId, userId) {
    const project = await this.getByProjectId(projectId)
    if (project.creatorId.toString() !== userId) {
      throw new BadRequest('Unable to delete project')
    }
    await dbContext.Projects.findOneAndRemove({ _id: projectId })
  }
}

export const projectsService = new ProjectsService()
