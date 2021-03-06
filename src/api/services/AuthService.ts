import { map, omit } from 'lodash'

import { FabrixService as Service } from '@fabrix/fabrix/dist/common'

/**
 * @module AuthService
 *
 * @description Default Service included with a new Fabrix app
 * @see {@link http://fabrix.app/doc/api/services}
 * @this FabrixApp
 */
export class AuthService extends Service {

  /**
   * Return some info about this application
   */
  getApplicationInfo () {
    return {
      app: this.app.pkg.version,
      node: process.version,
      libs: process.versions,
      spools: map(omit(this.app.spools, 'inspect'), spool => {
        return {
          name: spool.name,
          version: spool.pkg.version
        }
      })
    }
  }
}
