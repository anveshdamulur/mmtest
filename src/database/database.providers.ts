import { Sequelize } from 'sequelize-typescript';
import { User } from 'src/auth/user.entity';
import { DEVELOPMENT, PRODUCTION, SEQUELIZE } from '../constants/constants';
import { configObj } from './database.config';
export const databaseProviders = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      // setup config
      let config;
      // we can use swith here but its just 2 cases so I used if
      console.log(process.env.NODE_ENV);
      if (process.env.NODE_ENV === DEVELOPMENT) {
        config = configObj.development;
      } else if (process.env.NODE_ENV === PRODUCTION) {
        config = configObj.production;
      }
      const sequelize = new Sequelize(config);
      sequelize.addModels([User]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
