import * as dotenv from 'dotenv';
dotenv.config();
export const jwtObj = {
  key: process.env.JWT_SECRET_KET,
};
