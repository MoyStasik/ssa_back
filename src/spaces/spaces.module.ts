import { Module } from '@nestjs/common';
import { SpacesController } from './spaces.controller.js';
import { SpacesService } from './spaces.service.js';
import { SequelizeModule } from '@nestjs/sequelize';
import { Space } from './spaces.model.js';
import { User } from '../users/users.model.js';
import { SpaceUsers } from './space-users.model.js';

@Module({
  controllers: [SpacesController],
  providers: [SpacesService],
  imports: [SequelizeModule.forFeature([Space, User, SpaceUsers])],
})
export class SpacesModule {}
