import 'reflect-metadata'
import express from 'express'
import 'express-async-errors'
import './database/index'

import router from './routes'

import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())
app.use(router)

app.listen(3333, () => console.log('Server running at http://localhost:3333'))
