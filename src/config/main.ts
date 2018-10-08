/**
 * Main App Configuration
 * (app.config.main)
 *
 * @see {@link http://fabrix.app/docs/config/main}
 */

import { ExpressSpool } from '@fabrix/spool-express'
/**
 * Spools: import spools
 */
import { GenericsSpool } from '@fabrix/spool-generics'
import { HapiSpool } from '@fabrix/spool-hapi'
import { RealtimeSpool } from '@fabrix/spool-realtime'
import { RouterSpool } from '@fabrix/spool-router'
import { SequelizeSpool } from '@fabrix/spool-sequelize'
import { WinstonSpool } from '@fabrix/spool-winston'
import { resolve } from 'path'

export const main = {

  /**
   * Order does *not* matter. Each module is loaded according to its own
   * requirements.
   */
  spools: [
    // Spool for generics
    GenericsSpool,
    // Spool for Winston as a log transport
    WinstonSpool,
    // Spool for Router
    RouterSpool,
    // Spool for Express Webserver
    ExpressSpool,
    // Spool for Realtime connectivity
    // RealtimeSpool,
    // Spool for Sequelize ORM
    SequelizeSpool,
  ],

  /**
   * Define application paths here. "root" is the only required path.
   */
  paths: {
    root: resolve(__dirname, '..'),
    temp: resolve(__dirname, '..', '.tmp')
  }
}
