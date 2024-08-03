import { User } from "@/common/entities/users.entity";
import { EntityRepository, wrap } from "@mikro-orm/postgresql";
import { RegisterUserDto } from "./users.dtos";
import { Injectable } from "@nestjs/common";

@Injectable()
export class UsersRepository extends EntityRepository<User> {
    async createOne(registerUserDto: RegisterUserDto) {
      const user = new User();

      wrap(user).assign({...registerUserDto})

      this.em.persist(user).flush();

      return user;
    }
}