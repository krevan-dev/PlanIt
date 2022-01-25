import { BadRequest } from '@bcwdev/auth0provider/lib/Errors'
import { dbContext } from '../db/DbContext'

class TasksService {
  async getByProjectId(projectId) {
    const task = await dbContext.Tasks.find({ projectId: projectId }).populate('creator')
    if (!task) {
      throw new BadRequest('Invalid Task Id')
    }
    return task
  }

  async create(body) {
    const task = await dbContext.Tasks.create(body)
    return task
  }

  async remove(taskId, userId) {
    const task = await dbContext.Tasks.findById(taskId)
    if (task.creatorId.toString() !== userId) {
      throw new BadRequest('Unable to delete task.')
    }
    await dbContext.Tasks.findOneAndRemove({ _id: taskId })
  }

  async edit(task) {
    const original = await dbContext.Tasks.findById(task.id)
    original.name = task.name || original.name
    original.isComplete = task.isComplete || original.isComplete
    original.sprintId = task.sprintId || original.sprintId
    await original.save()
    return original
  }
}

export const tasksService = new TasksService()
