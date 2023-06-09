import { Request, Response } from 'express'
import { CreateCodeService } from '../services/CreateCodeService'

class CreateCodeController {
  async handle(request: Request, response: Response) {
    const createCodeService = new CreateCodeService()

    const code = await createCodeService.execute()
    return response.json(code)
  }
}

export { CreateCodeController }
