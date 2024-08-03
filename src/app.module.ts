import {PostgreSqlDriver, ReflectMetadataProvider} from '@mikro-orm/postgresql'
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';

import { UsersModule } from './users/users.module';
import * as path from 'path';

@Module({
  imports: [UsersModule,
    MikroOrmModule.forRoot({
      entities: [path.resolve(process.cwd(), "dist/**/*.entity.js")],
      entitiesTs: [path.resolve(process.cwd(), "src/**/*.entity.ts")],
      user: 'postgres',
      password: 'postgres',
      dbName: 'teebay',
      driver: PostgreSqlDriver,
      metadataProvider: ReflectMetadataProvider,
      migrations: {
        path: "src/db/migrations",
      },
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
