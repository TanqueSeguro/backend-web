import { Request, Response } from 'express'
import { EditCodeService } from '../services/EditCodeService'

class EditCodeController {
  async handle(request: Request, response: Response) {
    const { id, usersUp } = request.query
    const editCodeService = new EditCodeService()

    let users: boolean
    if (usersUp == '0') {
      users = false
    }

    if (usersUp == '1') {
      users = true
    }

    const code = await editCodeService.execute({
      id: String(id),
      usersUp: users
    })

    return response.json(code)
  }
}

export { EditCodeController }
