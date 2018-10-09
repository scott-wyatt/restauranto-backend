/**
 * Fabrix Configuration Manifest
 * @see {@link http://fabrix.app/docs/config/manifest}
 */
import * as env from './env'

import { email } from './email'
import { i18n } from './i18n'
import { log } from './log'
import { main } from './main'
import { models } from './models'
import { routes } from './routes'
import { session } from './session'
import { stores } from './stores'
import { web } from './web'

export {
  env,
  email,
  i18n,
  log,
  main,
  models,
  routes,
  session,
  stores,
  web
}
