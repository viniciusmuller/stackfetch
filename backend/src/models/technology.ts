import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';

import User from './user'

@Entity('technologies')
export default class Technology {

  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('varchar', {
    length: 20,
    unique: true
  })
  name: string;

  @Column('varchar', {length: 7})
  color: string;

  @ManyToMany(() => User, user => user.technologies)
  users: User[];
}
