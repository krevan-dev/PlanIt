import { Auth0Provider } from '@bcwdev/auth0provider'
import BaseController from '../utils/BaseController'
import { sprintsService } from '../services/SprintsService'
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
    try {
      const project = await sprintsService.getByProjectId(req.params.projectId)
      return res.send(project)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      req.body.projectId = req.params.projectId
      const sprint = await sprintsService.create(req.body)
      sprint.creator = req.userInfo
      return res.send(sprint)
    } catch (error) {
      next(error)
    }
  }

  async remove(req, res, next) {
    try {
      await sprintsService.remove(req.params.sprintId, req.userInfo.id)
      return res.send('Sprint Deleted.')
    } catch (error) {
      next(error)
    }
  }
}
