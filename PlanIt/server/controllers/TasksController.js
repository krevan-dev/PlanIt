import { Auth0Provider } from '@bcwdev/auth0provider'
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

  async getByProjectId(res, req, next) {
    throw new Error('Method not implemented.')
  }

  async create(res, req, next) {
    throw new Error('Method not implemented.')
  }

  async editTask(res, req, next) {
    throw new Error('Method not implemented.')
  }

  async remove(res, req, next) {
    throw new Error('Method not implemented.')
  }
}
