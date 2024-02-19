import { Module } from '@nestjs/common';
import { UserController } from './controller/user.controller';
import { UserService } from './services/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './domain/entities/user.entity';
import { PROVIDER_KEY } from './constant/common.constant';
import { UserRepository } from './infrastructure/repository/user.repository';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [
    { provide: PROVIDER_KEY.USER_SERVICE, useClass: UserService },
    {
      provide: PROVIDER_KEY.USER_REPOSITORY,
      useClass: UserRepository,
    },
  ],
})
export class VesselModule {}
