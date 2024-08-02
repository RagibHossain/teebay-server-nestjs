import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class User {

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
