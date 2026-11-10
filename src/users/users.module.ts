import { Module } from '@nestjs/common';
import { UsersController } from './users.controller.js';
import { UsersService } from './users.service.js';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './users.model.js';
import { Space } from '../spaces/spaces.model.js';
import { SpaceUsers } from '../spaces/space-users.model.js';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    SequelizeModule.forFeature([User, Space, SpaceUsers]),
  ],
})
export class UsersModule {}
