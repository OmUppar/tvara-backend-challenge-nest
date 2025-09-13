import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity({ name: 'Interview_Tests' })
export class InterviewTest {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @CreateDateColumn({ type: 'timestamptz' })
  created_at: Date;

  @Column({ type: 'text', nullable: true })
  name: string;

  @Column({ type: 'jsonb', nullable: true })
  field_1: any;

  @Column({ type: 'bigint', nullable: true })
  field_2: number;

  @Column({ type: 'boolean', nullable: true })
  field_3: boolean;
}
