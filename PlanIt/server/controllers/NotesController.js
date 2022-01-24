import { Auth0Provider } from '@bcwdev/auth0provider'
import BaseController from '../utils/BaseController'

export class NotesController extends BaseController {
  constructor() {
    super('api/projects/:projectId/notes')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getByProjectId)
      .post('', this.create)
      .delete('/:noteId', this.remove)
  }

  async getByProjectId(res, req, next) {
    throw new Error('Method not implemented.')
  }

  async create(res, req, next) {
    throw new Error('Method not implemented.')
  }

  async remove(res, req, next) {
    throw new Error('Method not implemented.')
  }
}
