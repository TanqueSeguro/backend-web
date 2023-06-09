import { AppDataSource } from '../database/data-source'
import { Code } from '../entities/Code'

interface iCodeEdit {
  id: string
  usersUp?: string | boolean
}

class EditCodeService {
  async execute({ id, usersUp }: iCodeEdit) {
    const codeRepository = AppDataSource.getRepository(Code)

    const code = await codeRepository.findOneBy({
      id
    })

    if (!code) {
      return {
        msg: 'O Código não existe'
      }
    }

    if (usersUp !== undefined) {
      if (usersUp) {
        if (code.numUsers >= 3) {
          return {
            msg: 'O limite de usuários (3 usuários) por sensor já foi atingido!'
          }
        }
        code.numUsers += 1
      } else {
        code.numUsers -= 1
      }
    }

    code.status = true

    await codeRepository.save(code)

    return code
  }
}

export { EditCodeService }
