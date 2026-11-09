import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service.js';
import { CreateUserDto } from './dto/create-user.dto.js';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './users.model.js';

@ApiTags('Пользователи')
@Controller('/api/users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get(':id')
  @ApiOperation({ summary: 'Получение пользователя по id'})
  @ApiResponse({ status: 200, type: User })
  getUser(@Param() params: { id: number }) {
    return params.id;
  }

  @ApiOperation({ summary: 'Получение всех пользователей'})
  @ApiResponse({ status: 200, type: [User] })
  @Get()
  async getAllUsers() {
    return await this.usersService.getUsers();
  }

  @ApiOperation({ summary: 'Создание пользователя'})
  @ApiResponse({ status: 201, type: User })
  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    this.usersService.create(createUserDto);
  }
}
