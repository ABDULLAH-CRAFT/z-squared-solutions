import { join } from 'node:path';
import type { DataSourceOptions } from 'typeorm';
import type { DatabaseConfig } from '../config/app.config.js';

/** TypeORM globs need forward slashes, including on Windows. */
function glob(...segments: string[]): string {
  return join(import.meta.dirname, ...segments).replaceAll('\\', '/');
}

/**
 * Shared by the Nest runtime and the TypeORM CLI.
 * Schema changes happen only through migrations, never through synchronize.
 * Patterns match compiled .js files only, so build before running migrations.
 */
export function buildTypeOrmOptions(db: DatabaseConfig): DataSourceOptions {
  return {
    type: 'postgres',
    host: db.host,
    port: db.port,
    username: db.username,
    password: db.password,
    database: db.database,
    ssl: db.ssl,
    entities: [glob('..', '**', '*.entity.js')],
    migrations: [glob('migrations', '*.js')],
    synchronize: false,
    migrationsRun: false,
  };
}