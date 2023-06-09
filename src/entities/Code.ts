import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity('codes')
export class Code {
  @PrimaryColumn()
  id: string

  @Column()
  status: boolean

  @Column()
  numUsers: number
}
