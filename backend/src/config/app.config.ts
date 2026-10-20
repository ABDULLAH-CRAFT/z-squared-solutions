export type NodeEnv = 'development' | 'test' | 'production';

export interface DatabaseConfig {
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
  ssl: boolean;
}

export interface AppConfig {
  nodeEnv: NodeEnv;
  port: number;
  corsOrigins: string[];
  database: DatabaseConfig;
}

type Env = Record<string, string | undefined>;

function required(env: Env, key: string): string {
  const value = env[key]?.trim();
  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
  return value;
}

function parseBoolean(env: Env, key: string, fallback: boolean): boolean {
  const value = env[key]?.trim().toLowerCase();
  if (value === undefined || value === '') return fallback;
  if (value === 'true') return true;
  if (value === 'false') return false;
  throw new Error(`Environment variable ${key} must be "true" or "false"`);
}

function parsePort(raw: string, key: string): number {
  const port = Number(raw);
  if (!Number.isInteger(port) || port < 1 || port > 65535) {
    throw new Error(`Environment variable ${key} must be a valid port number`);
  }
  return port;
}

function parseNodeEnv(raw: string | undefined): NodeEnv {
  const value = raw?.trim() || 'development';
  if (value === 'development' || value === 'test' || value === 'production') {
    return value;
  }
  throw new Error('NODE_ENV must be one of: development, test, production');
}

/** Validates the environment at startup and returns typed configuration. Throws on invalid input. */
export function loadConfig(env: Env = process.env): AppConfig {
  const nodeEnv = parseNodeEnv(env['NODE_ENV']);
  const isProduction = nodeEnv === 'production';

  const corsOrigins = required(env, 'CORS_ORIGIN')
    .split(',')
    .map((origin) => origin.trim())
    .filter((origin) => origin.length > 0);

  for (const origin of corsOrigins) {
    if (origin === '*' || !URL.canParse(origin)) {
      throw new Error(`CORS_ORIGIN contains an invalid or wildcard origin: ${origin}`);
    }
    if (isProduction && !origin.startsWith('https://')) {
      throw new Error(`CORS_ORIGIN must use https in production: ${origin}`);
    }
  }

  const ssl = parseBoolean(env, 'DB_SSL', false);
  if (isProduction && !ssl) {
    throw new Error('DB_SSL must be true in production');
  }

  return {
    nodeEnv,
    port: parsePort(env['PORT']?.trim() || '3000', 'PORT'),
    corsOrigins,
    database: {
      host: required(env, 'DB_HOST'),
      port: parsePort(required(env, 'DB_PORT'), 'DB_PORT'),
      username: required(env, 'DB_USERNAME'),
      password: required(env, 'DB_PASSWORD'),
      database: required(env, 'DB_DATABASE'),
      ssl,
    },
  };
}