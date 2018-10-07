/**
 * Datastores Configuration
 * (app.config.stores)
 *
 * Configure the ORM layer, connections, etc.
 *
 * @see {@link http://fabrix.app/docs/config/stores}
 */

export const stores = {
  /**
   * Define a store called "local" which uses PostgresSQL to persist data.
   */
  postgres: {
    typeValidation: true,
    benchmark: true,
    uri: process.env.DATABASE_URL || 'postgres://restauranto:xs4restauranto@127.0.0.1:5432/restauranto_dev',
    dialect: 'postgres',
  }
};
