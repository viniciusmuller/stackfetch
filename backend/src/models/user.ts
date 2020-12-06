import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';

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

  @Column({ name:'github_username' })
  gitHubUsername: string;

  @ManyToMany(() => Technology, technology => technology.users)
  @JoinTable()
  technologies: Technology[];
}
