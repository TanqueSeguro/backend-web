import { AppDataSource } from '../database/data-source'
import { Code } from '../entities/Code'

class GetCodeService {
  async all() {
    const codeRepository = AppDataSource.getRepository(Code)

    const codes = await codeRepository.find()

    return codes
  }

  async one(id: string) {
    const codeRepository = AppDataSource.getRepository(Code)

    const code = await codeRepository.findOneBy({
      id
    })

    if (!code) {
      return {
        msg: 'O Código não existe'
      }
    }

    return code
  }
}

export { GetCodeService }
