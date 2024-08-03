import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';

import { UsersModule } from './users/users.module';
import ormConfig from './db/db.config';

@Module({
  imports: [UsersModule,
    MikroOrmModule.forRoot(ormConfig),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
