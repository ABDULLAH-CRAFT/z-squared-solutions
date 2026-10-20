
import { DataSource } from 'typeorm';
import { loadConfig } from '../config/app.config.js';
import { buildTypeOrmOptions } from './typeorm.options.js';

// The TypeORM CLI does not read .env on its own.
try {
  process.loadEnvFile();
} catch {
  // No .env file: rely on variables already present in the environment.
}

export default new DataSource(buildTypeOrmOptions(loadConfig().database));
