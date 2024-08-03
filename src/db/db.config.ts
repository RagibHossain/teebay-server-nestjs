import { Migrator, TSMigrationGenerator } from '@mikro-orm/migrations';
import {
  defineConfig,
  PostgreSqlDriver,
  ReflectMetadataProvider,
} from '@mikro-orm/postgresql';
import { SeedManager } from '@mikro-orm/seeder';
import * as path from 'path';

const ormConfig = defineConfig({
  entities: [path.resolve(process.cwd(), 'dist/**/*.entity.js')],
  entitiesTs: [path.resolve(process.cwd(), 'src/**/*.entity.ts')],
  user: 'postgres',
  password: 'postgres',
  dbName: 'teebay',
  driver: PostgreSqlDriver,
  metadataProvider: ReflectMetadataProvider,
  extensions: [Migrator, SeedManager],
  migrations: {
    tableName: "mikro_orm_migrations",
    path: './dist/src/db/migrations',
    pathTs: './src/db/migrations',
    glob: '!(*.d).{js,ts}', // how to match migration files (all .js and .ts files, but not .d.ts)
    transactional: true, // wrap each migration in a transaction
    disableForeignKeys: false,
    allOrNothing: true, // wrap all migrations in master transaction
    dropTables: true, // allow to disable table dropping
    safe: false, // allow to disable table and column dropping
    snapshot: true, // save snapshot when creating new migrations
    emit: 'ts', // migration generation mode
    generator: TSMigrationGenerator,
    fileName: (timestamp: string, name?: string) => {
      if (!name) {
        throw new Error('Specify migration name via `--name=...`');
      }
      return `Migration${timestamp}_${name}`;
    },
  },
  seeder: {
    path: './dist/src/db/seeders',
    pathTs: './src/db/seeders',
    fileName: (className: string) => className,
  },
});

export default ormConfig;
