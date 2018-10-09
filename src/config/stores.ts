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
    orm: 'sequelize',
    typeValidation: true,
    benchmark: true,
    uri: process.env.DATABASE_URL || 'postgresql://restauranto:xs4restauranto@127.0.0.1:5432/restuaranto_dev',
    dialect: 'postgres',
    migrate: 'drop'
  }
}
