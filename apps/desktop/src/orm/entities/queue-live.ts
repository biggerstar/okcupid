import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm"

@Entity()
export class QueueLiveEntity extends BaseEntity {
  @PrimaryColumn({ type: 'varchar' })
  display_id: string

  @Column({ type: 'varchar' })
  room_id: string

  /** 当前获取进程  */
  @Column({ type: 'varchar' })
  process: 'feedQueue' | 'completed'

  @Column({ type: 'varchar' })
  nickname: string

  @Column({ type: 'integer' })
  fans: number // 博主粉丝

  @Column({ type: 'integer' })
  follow: number // 博主主动关注的人数

  @Column({ type: 'integer' })
  audience_count: number // 直播观众人数

  @Column({ type: 'integer' })
  like_count: number // 直播点赞人数

  @Column({ type: 'boolean' })
  is_ecommerce: boolean

  @Column({ type: 'varchar' })
  live_type: string

  @Column({ type: 'varchar'})
  data_from: string

  @Column({ type: 'varchar', nullable: true })
  region?: string

  @Column({ type: 'integer', nullable: true })
  coin?: number

  @Column({ type: 'integer', nullable: true })
  tow_week_coins?: number

  @Column({ type: 'varchar', nullable: true })
  tags?: string

  @Column({ type: 'varchar', nullable: true })
  check_result?: string

  @Column({ type: 'varchar', nullable: true })
  is_god_invite?: string
  
  @Column({ type: 'varchar', nullable: true })
  check_time?: string

  @Column({ type: 'varchar', nullable: true })
  upload_time?: string

  @CreateDateColumn()
  created_time: Date

  @UpdateDateColumn()
  updated_time: Date
}
