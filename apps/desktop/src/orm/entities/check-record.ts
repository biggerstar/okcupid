import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity()
export class CheckRecordEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'varchar' })
  random: string

  @Column({ type: 'integer', nullable: true })
  check_count: number

  @Column({ type: 'integer', nullable: true })
  check_success: number

  @CreateDateColumn()
  created_time: Date

  @UpdateDateColumn()
  updated_time: Date
}
