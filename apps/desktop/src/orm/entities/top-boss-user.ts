import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm"

@Entity()
export class TopBossUserEntity extends BaseEntity {
  @PrimaryColumn({ type: 'varchar' })
  id: string

  @Column({ type: 'varchar' })
  display_name: string

  @Column({ type: 'varchar' })
  nickname: string

  @Column({ type: 'varchar' })
  from_live_display_name: string

  @Column({ type: 'integer', default: 0 })
  fan_ticket: string

  @Column({ type: 'varchar', nullable: true })
  upload_time?: string

  @CreateDateColumn()
  created_time: Date

  @UpdateDateColumn()
  updated_time: Date
}
