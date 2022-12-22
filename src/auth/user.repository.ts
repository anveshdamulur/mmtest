import { User } from './user.entity';

export const UsersRepository = [
  {
    provide: 'USER_REPOSITORY',
    useValue: User,
  },
];
