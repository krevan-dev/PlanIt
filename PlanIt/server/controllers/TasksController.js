import { Auth0Provider } from '@bcwdev/auth0provider'
import { tasksService } from '../services/TasksService'
import BaseController from '../utils/BaseController'

export class TasksController extends BaseController {
  constructor() {
    super('api/projects/:projectId/tasks')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getByProjectId)
      .post('', this.create)
      .put('/:taskId', this.editTask)
      .delete('/:taskId', this.remove)
  }

  async getByProjectId(req, res, next) {
    try {
      const task = await tasksService.getByProjectId(req.params.projectId)
      return res.send(task)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      req.body.projectId = req.params.projectId
      // req.body.sprintId = req.params.sprintId
      const task = await tasksService.create(req.body)
      // @ts-ignore
      task.creator = req.userInfo
      return res.send(task)
    } catch (error) {
      next(error)
    }
  }

  // REVIEW Cant get edit to pass the tests help lol
  async editTask(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      req.body.id = req.params.taskId
      const task = await tasksService.edit(req.body)
      return res.send(task)
    } catch (error) {
      next(error)
    }
  }

  async remove(req, res, next) {
    try {
      await tasksService.remove(req.params.taskId, req.userInfo.id)
      return res.send('Task Deleted.')
    } catch (error) {
      next(error)
    }
  }
}
