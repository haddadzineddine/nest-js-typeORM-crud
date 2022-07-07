import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/databse.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
