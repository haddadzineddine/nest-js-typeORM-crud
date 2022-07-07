import { DataSource } from 'typeorm';
import { Constants } from '../constants';
import { UserRepositoryPsql } from './repositories/user.repository.psql';
import { User } from './entities/user.entity';

export const UserProviders = [
  {
    provide: Constants.USER_INTERFACE,
    useClass: UserRepositoryPsql,
  },
  {
    provide: Constants.USER_REPOSITORY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(User),
    inject: [Constants.DATA_SOURCE],
  },
];
