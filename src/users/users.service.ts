import { BadRequestException, Injectable } from '@nestjs/common';
import { EntityManager } from '@mikro-orm/core';
import { RegisterUserDto } from './users.dtos';
import { User } from '@/common/entities/users.entity';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async create(registerUserDto: RegisterUserDto) {
    const user = await this.usersRepository.findOne(
      {
        email: registerUserDto.email
      }
    )

    if(user) {
      throw new BadRequestException("User with this email already exists");
    }

    return this.usersRepository.createOne(registerUserDto);
  }
}
