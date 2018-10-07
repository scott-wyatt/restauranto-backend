/**
 * Models Configuration
 * (app.config.models)
 *
 * Configure the model defaults
 *
 * @see {@link http://fabrix.app/docs/config/models}
 */
export const models = {
  /**
   * The default store used by models
   */
  defaultStore: 'postgres',
  /**
   * The default migration operation if not specified by store
   */
  migrate: 'alter'
}
