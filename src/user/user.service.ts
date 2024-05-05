import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginUserDTO } from './dto/user-login.dto';

@Injectable()
export class UserService {
  login(password: string): any {
    if (password === 'pAssw0rd')
      return {
        id: 1,
        firstName: 'first name',
        lastName: 'Last name',
        address: 'Dhaka',
        email: 'ragib@sazim.io',
        phoneNumber: '01680800602',
        password: 'password',
      };
    
    throw new UnauthorizedException("Wrong credentials");
  }
}
