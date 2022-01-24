import { Auth0Provider } from '@bcwdev/auth0provider'
import BaseController from '../utils/BaseController'

export class SprintsController extends BaseController {
  constructor() {
    super('api/projects/:projectId/sprints')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getByProjectId)
      .post('', this.create)
      .delete('/:sprintId', this.remove)
  }

  async getByProjectId(req, res, next) {
    throw new Error('Method not implemented.')
  }

  async create(req, res, next) {
    throw new Error('Method not implemented.')
  }

  async remove(req, res, next) {
    throw new Error('Method not implemented.')
  }
}
