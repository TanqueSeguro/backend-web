import { AppDataSource } from '../database/data-source'
import { Code } from '../entities/Code'

const codeRepository = AppDataSource.getRepository(Code)
class CreateCodeService {
  async execute() {
    const code = new Code()
    code.id = await generateCode()
    code.status = false
    code.numUsers = 0

    await codeRepository.save(code)

    return code
  }
}

const letters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'o',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
]
async function generateCode() {
  let code = ''
  for (var i = 0; i < 6; i++) {
    const numberOrLetter = Math.floor(Math.random() * 2)
    if (numberOrLetter == 0) {
      const number = Math.floor(Math.random() * 10)
      code += number.toString()
    } else {
      const sortLetter = Math.floor(Math.random() * 26)
      const sortCase = Math.floor(Math.random() * 2)
      const letter =
        sortCase == 0 ? letters[sortLetter] : letters[sortLetter].toUpperCase()
      code += letter
    }
  }

  const codeExists = await codeRepository.findOneBy({
    id: code
  })

  if (codeExists) {
    generateCode()
  } else {
    return code
  }
}

export { CreateCodeService }
