import { UsersRepository } from '@/users/users.repository';
import { Entity, EntityRepositoryType, PrimaryKey, Property } from '@mikro-orm/core';
import { BaseEntity } from '../base.entity';
import { RegisterUserDto } from '@/users/users.dtos';

@Entity({
   tableName: "users",
   repository: () => UsersRepository,
 })
 export class User extends BaseEntity {
   [EntityRepositoryType]?: UsersRepository;

   @PrimaryKey({ autoincrement: true })
   id!: number;

   @Property({ fieldName: "first_name" })
   firstName!: string;

   @Property({ fieldName: "last_name" })
   lastName!: string;

   @Property({ unique: true })
   email!: string;

   @Property({ fieldName: "phone_number" })
   phoneNumber!: string;

   @Property()
   address!: string;

   @Property()
   password!: string;
}
