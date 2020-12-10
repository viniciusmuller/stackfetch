import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';

import User from './user';

@Entity('technologies')
export default class Technology {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  color: string;

  @ManyToMany(() => User, (user) => user.technologies)
  users: User[];
}
