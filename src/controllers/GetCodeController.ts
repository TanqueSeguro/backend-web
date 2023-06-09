import { Request, Response } from 'express'
import { GetCodeService } from '../services/GetCodeService'

class GetCodeController {
  async handleAll(request: Request, response: Response) {
    const getCodeService = new GetCodeService()

    const codes = await getCodeService.all()

    return response.json(codes)
  }

  async handleOne(request: Request, response: Response) {
    const { id } = request.query
    const getCodeService = new GetCodeService()

    const code = await getCodeService.one(String(id))

    return response.json(code)
  }
}

export { GetCodeController }
