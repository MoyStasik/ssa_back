import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { User } from '../users/users.model.js';
import { Space } from './spaces.model.js';

enum Roles {
  'OWNER',
  'ADMIN',
  'USER',
}

@Table({ tableName: 'space_users' })
export class SpaceUsers extends Model<SpaceUsers> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ForeignKey(() => Space)
  @Column({ type: DataType.INTEGER, allowNull: false })
  space_id: number;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER, allowNull: false })
  user_id: number;

  @Column({ type: DataType.ENUM('OWNER','ADMIN','USER'), allowNull: false, defaultValue: 'USER' })
  role: Roles;
}
