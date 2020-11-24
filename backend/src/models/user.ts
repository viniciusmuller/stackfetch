import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';

import Technology from './technology';

@Entity('users')
export default class User {

  @PrimaryGeneratedColumn('increment')
  id: number;
    
  @Column('varchar', {length: 50})
  name: string;
  
  @Column('integer')
  age: number;
  
  @Column('varchar', {length: 300})
  about: string;

  @Column('varchar', {
    length: 39,
    unique: true
  })
  gitHubUsername: string;

  @ManyToMany(() => Technology, technology => technology.users, {
    cascade: true,
  })
  @JoinTable()
  technologies: Technology[];
}
