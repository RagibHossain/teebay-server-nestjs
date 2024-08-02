import { BadRequestException, Injectable } from '@nestjs/common';
import { EntityManager } from '@mikro-orm/core';
import { RegisterUserDto } from './users.dtos';
import { User } from '@/common/entities/users.entity';

@Injectable()
export class UsersService {
  constructor(private readonly em: EntityManager) {}

  async create(registerUserDto: RegisterUserDto) {
    try {
      const user = this.em.create(User, registerUserDto);
      await this.em.persistAndFlush(user);
      return user;
    } catch (e) {
      throw new BadRequestException('User is already registered');
    }
  }
}
