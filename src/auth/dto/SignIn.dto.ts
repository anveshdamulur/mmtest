import {
  IsEmail,
  IsString,
  MinLength,
  MaxLength,
  Matches,
} from 'class-validator';

export class SignInDto {
  @IsString()
  username: string;

  @IsString()
  @MinLength(8)
  @MaxLength(18)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Please verify your pass',
  })
  password: string;
}
