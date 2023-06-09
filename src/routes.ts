import { Request, Response, Router } from 'express'
import { CreateCodeController } from './controllers/CreateCodeController'
import { EditCodeController } from './controllers/EditCodeController'
import { GetCodeController } from './controllers/GetCodeController'

const createCodeController = new CreateCodeController()
const editCodeController = new EditCodeController()

const getCodeController = new GetCodeController()

const router = Router()

router.get('/code/all', getCodeController.handleAll)
router.get('/code', getCodeController.handleOne)

router.post('/code/new', createCodeController.handle)
router.post('/code/update', editCodeController.handle)

export default router
