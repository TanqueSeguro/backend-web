import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { Code } from '../entities/Code'

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: 'src/database/database.sqlite',
  synchronize: true,
  logging: false,
  entities: [Code]
})
