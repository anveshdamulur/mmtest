import { Model, Table, Column } from 'sequelize-typescript';
@Table
export class User extends Model {
  @Column
  username: string;
  @Column({ unique: true })
  email: string;
  @Column
  password: string;
}
