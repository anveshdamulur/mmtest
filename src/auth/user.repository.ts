import { USER_REPOSITORY } from 'src/constants/constants';
import { User } from './user.entity';

export const UsersRepository = [
  {
    provide: USER_REPOSITORY,
    useValue: User,
  },
];
