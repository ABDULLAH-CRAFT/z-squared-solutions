import { loadConfig } from './app.config.js';

const validEnv = {
  CORS_ORIGIN: 'http://localhost:5173',
  DB_HOST: 'localhost',
  DB_PORT: '5432',
  DB_USERNAME: 'postgres',
  DB_PASSWORD: 'secret',
  DB_DATABASE: 'z_squared_solutions',
};

describe('loadConfig', () => {
  it('returns typed configuration for a valid environment', () => {
    const config = loadConfig(validEnv);
    expect(config.port).toBe(3000);
    expect(config.nodeEnv).toBe('development');
    expect(config.corsOrigins).toEqual(['http://localhost:5173']);
    expect(config.database.ssl).toBe(false);
  });

  it('rejects a missing required variable', () => {
    expect(() => loadConfig({ ...validEnv, DB_HOST: undefined })).toThrow('DB_HOST');
  });

  it('rejects wildcard CORS origins', () => {
    expect(() => loadConfig({ ...validEnv, CORS_ORIGIN: '*' })).toThrow('wildcard');
  });

  it('requires https origins in production', () => {
    expect(() =>
      loadConfig({ ...validEnv, NODE_ENV: 'production', DB_SSL: 'true' }),
    ).toThrow('https');
  });

  it('requires DB_SSL in production', () => {
    expect(() =>
      loadConfig({
        ...validEnv,
        NODE_ENV: 'production',
        CORS_ORIGIN: 'https://www.z2solution.com',
      }),
    ).toThrow('DB_SSL');
  });
});