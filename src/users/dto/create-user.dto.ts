import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'stas@mail.ru', description: 'Почтовый адрес' })
  readonly email: string;

  @ApiProperty({ example: 'Stask2', description: 'Имя пользователя' })
  readonly username: string;

  @ApiProperty({ example: '1234', description: 'Пароль пользователя' })
  readonly password: string;
}
