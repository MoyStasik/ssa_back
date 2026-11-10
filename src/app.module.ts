import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './users/users.module.js';
import { ConfigModule } from '@nestjs/config';
import { User } from './users/users.model.js';
import { SpacesController } from './spaces/spaces.controller.js';
import { SpacesService } from './spaces/spaces.service.js';
import { SpacesModule } from './spaces/spaces.module.js';
import { Space } from './spaces/spaces.model.js';
import { SpaceUsers } from './spaces/space-users.model.js';

@Module({
  controllers: [SpacesController],
  providers: [SpacesService],
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env'
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRESS_HOST,
      port: Number(process.env.POSTGRESS_PORT),
      username: process.env.POSTGRESS_USER,
      password: process.env.POSTGRESS_PASSWORD,
      database: process.env.POSTGRESS_DB,
      models: [User, Space, SpaceUsers],
      autoLoadModels: true,
    }),
    UsersModule,
    SpacesModule,

  ]
})
export class AppModule {

}
