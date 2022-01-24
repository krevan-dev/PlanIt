import { Auth0Provider } from '@bcwdev/auth0provider'
import { projectsService } from '../services/ProjectsService'
import BaseController from '../utils/BaseController'

export class ProjectsController extends BaseController {
  constructor() {
    super('api/projects')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('/:creatorId', this.getByCreatorId)
      .get('/:projectId', this.getByProjectId)
      .post('', this.create)
      .delete('/:projectId', this.remove)
  }

  async getByCreatorId(req, res, next) {
    try {
      const project = await projectsService.getByCreatorId()
      return res.send(project)
    } catch (error) {
      next(error)
    }
  }

  async getByProjectId(req, res, next) {
    try {
      const project = await projectsService.getByProjectId()
      return res.send(project)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const project = await projectsService.create(req.body)
      return res.send(project)
    } catch (error) {
      next(error)
    }
  }

  async remove(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      await projectsService.remove(req.params.id, req.userInfo.id)
      return res.send('Project deleted.')
    } catch (error) {
      next(error)
    }
  }
}
