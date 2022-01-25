import { BadRequest } from '@bcwdev/auth0provider/lib/Errors'
import { dbContext } from '../db/DbContext'

class NotesService {
  /**
   * Gets all and takes optional search query object
   * @param {Object} query
   * @returns Promise<Object>
   */
  async getAll(query = {}) {
    const notes = await dbContext.Notes.find(query).populate('creator', 'name picture')
    return notes
  }

  /**
 * Takes in a new note object and creates in db and returns new object with populated creator
 * @param {Object} body
 * @returns Promise<Object>
 */
  async create(body) {
    const note = await dbContext.Notes.create(body)
    return note
  }

  /**
 * removes note from db
 * @param {String} noteId
 * @param {String} userId Logged in user id
 */
  async remove(noteId, userId) {
    const note = await dbContext.Notes.findById(noteId)
    if (note.creatorId.toString() !== userId) {
      throw new BadRequest('Unable to delete note.')
    }
    await dbContext.Notes.findOneAndRemove({ _id: noteId })
  }
}

export const notesService = new NotesService()
