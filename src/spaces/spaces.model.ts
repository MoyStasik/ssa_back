import { BelongsToMany, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { User } from '../users/users.model.js';
import { SpaceUsers } from './space-users.model.js';

export interface SpaceData {
  name: string,
  avatar: string,
  owner_id: number,
}

@Table({ tableName: 'spaces' })
export class Space extends Model<Space, SpaceData> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @Column({ type: DataType.STRING, allowNull: false })
  avatar: string;

  @Column({ type: DataType.INTEGER, allowNull: false })
  owner_id: number;

  @BelongsToMany(() => User, () => SpaceUsers)
  users: User[];
  author: User;
}
