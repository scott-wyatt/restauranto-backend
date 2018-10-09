/**
 * Logging Configuration
 * (app.config.log)
 *
 * @see {@link http://fabrix.app/docs/config/log}
 */
import { format, transports } from 'winston'

export const log = {
  level: 'debug',
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.simple(),
      )
    })
  ]
}
