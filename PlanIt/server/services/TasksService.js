import { BadRequest } from '@bcwdev/auth0provider/lib/Errors'
import { dbContext } from '../db/DbContext'

class TasksService {
  async getByProjectId(projectId) {
    const task = await dbContext.Tasks.findOne({ projectId: projectId }).populate('creator')
    if (!task) {
      throw new BadRequest('Invalid Creator Id')
    }
    return task
  }

  async create(body) {
    const task = await dbContext.Tasks.create(body)
    return task
  }

  async remove(taskId, userId) {
    const task = await this.getByProjectId(taskId)
    if (task.creatorId.toString() !== userId) {
      throw new BadRequest('Unable to delete task.')
    }
    await dbContext.Tasks.findOneAndRemove({ _id: taskId })
    return task
  }

  async edit(task) {
    const original = await this.getByProjectId(task.id)
    original.body = task.body || original.body
    original.isComplete = task.isComplete || original.isComplete
    original.sprintId = task.sprintId || original.sprintId
    return original
  }
}

export const tasksService = new TasksService()
