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
    await note.populate('creator', 'name picture')
    return note
  }

  /**
 * removes note from db
 * @param {String} taskId
 * @param {String} id Logged in user id
 */
  remove(taskId, id) {
    throw new Error('Method not implemented.')
  }
}

export const notesService = new NotesService()
