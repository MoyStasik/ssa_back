import { ApiProperty } from '@nestjs/swagger';
import { AllowNull, Column, DataType, Model, Table } from 'sequelize-typescript';

export interface UserData {
  email: string,
  username: string,
  password: string,
}

@Table({ tableName: 'users'})
export class User extends Model<User, UserData>{
  @ApiProperty({ example: 1, description: 'Уникальный идентификатор' })
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ApiProperty({ example: 'Stask2', description: 'Имя пользователя' })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  username: string;

  @ApiProperty({ example: 'stas@mail.ru', description: 'Почтовый адрес' })
  @Column({ type: DataType.STRING, allowNull: false })
  email: string;

  @ApiProperty({ example: 'https://avatar.png', description: 'Ссылка на аватар пользователя' })
  @Column({ type: DataType.STRING, allowNull: true })
  avatar: string;

  @ApiProperty({ example: '1234', description: 'Пароль пользователя' })
  @Column({ type: DataType.STRING, allowNull: false })
  password: string;

  @ApiProperty({ example: '2026-11-07 21:18:52.586+03', description: 'Время создания пользователя' })
  @Column({ type: DataType.DATE, allowNull: false })
  createdAt: string;
}
