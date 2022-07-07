import { DataSource } from 'typeorm';
import { _config } from './_config';
import { Constants } from '../constants';

export const databaseProviders = [
  {
    provide: Constants.DATA_SOURCE,
    useFactory: async (): Promise<DataSource> => {
      const dataSource = new DataSource(_config);
      return dataSource.initialize();
    },
  },
];
