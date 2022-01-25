import { BadRequest } from '@bcwdev/auth0provider/lib/Errors'
import { dbContext } from '../db/DbContext'

class SprintsService {
  async getByProjectId(projectId) {
    const sprint = await dbContext.Sprints.find({ projectId: projectId }).populate('creator')
    if (!sprint) {
      throw new BadRequest('Invalid Project Id')
    }
    return sprint
  }

  async create(body) {
    const sprint = await dbContext.Sprints.create(body)
    return sprint
  }

  async remove(sprintId, userId) {
    const sprint = await dbContext.Sprints.findById(sprintId)
    // @ts-ignore
    if (sprint.creatorId.toString() !== userId) {
      throw new BadRequest('Unable to delete sprint.')
    }
    await dbContext.Sprints.findOneAndRemove({ _id: sprintId })
    // return sprint
  }
}

export const sprintsService = new SprintsService()
