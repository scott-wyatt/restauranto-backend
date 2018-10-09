/**
 * Main App Configuration
 * (app.config.main)
 *
 * @see {@link http://fabrix.app/docs/config/main}
 */
/**
 * Spools: import spools
 */
import { REPLSpool } from '@fabrix/spool-repl'
import { GenericsSpool } from '@fabrix/spool-generics'
// import { RealtimeSpool } from '@fabrix/spool-realtime'
import { ExpressSpool } from '@fabrix/spool-express'
import { RouterSpool } from '@fabrix/spool-router'
import { SequelizeSpool } from '@fabrix/spool-sequelize'
import { WinstonSpool } from '@fabrix/spool-winston'
import { resolve } from 'path'

export const main = {

  /**
   * Order does matter. Each module is loaded according to its own
   * requirements and spools loaded last take higher config priority.
   */
  spools: [
    REPLSpool,
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
    // Spool for generics
    GenericsSpool
  ],

  /**
   * Define application paths here. "root" is the only required path.
   */
  paths: {
    root: resolve(__dirname, '..'),
    temp: resolve(__dirname, '..', '.tmp')
  }
}
