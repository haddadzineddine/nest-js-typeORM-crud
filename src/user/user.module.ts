import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserProviders } from './user.providers';
import { UserRepositoryPsql } from './repositories/user.repository.psql';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService, ...UserProviders, UserRepositoryPsql],
})
export class UserModule {}
