import { Injectable } from '@nestjs/common';
import { User, UserData } from './users.model.js';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto.js';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private usersRepository: typeof User) {}

  async create(dto: CreateUserDto) {
    return await this.usersRepository.create(dto);
  }

  async getUsers() {
    return await this.usersRepository.findAll();
  }
}
