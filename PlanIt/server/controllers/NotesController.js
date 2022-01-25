import { Auth0Provider } from '@bcwdev/auth0provider'
import { notesService } from '../services/NotesService'
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

  async getByProjectId(req, res, next) {
    try {
      const note = await notesService.getAll({ projectId: req.params.projectId })
      return res.send(note)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      req.body.projectId = req.params.projectId
      const note = await notesService.create(req.body)
      note.creator = req.userInfo
      return res.send(note)
    } catch (error) {
      next(error)
    }
  }

  async remove(req, res, next) {
    try {
      await notesService.remove(req.params.noteId, req.userInfo.id)
      return res.send('Task has been deleted')
    } catch (error) {
      next(error)
    }
  }
}
