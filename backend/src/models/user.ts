import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable
} from 'typeorm';

import Technology from './technology';

@Entity('users')
export default class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  age: number;

  @Column()
  about: string;

  @Column({ name: 'github_username' })
  gitHubUsername: string;

  @Column('timestamp', {
    name: 'registered_at',
    default: () => 'CURRENT_TIMESTAMP'
  })
  registeredAt: string;

  @ManyToMany(() => Technology, (technology) => technology.users, {
    cascade: true,
    eager: true
  })
  @JoinTable()
  technologies: Technology[];
}
