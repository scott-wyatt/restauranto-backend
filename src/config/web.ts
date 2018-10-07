import * as express from 'express'

/**
 * Web Configuration
 * (app.config.web)
 *
 * Pattern for common Web servers
 *
 * @see {@link http://fabrix.app/docs/config/web}
 */

export const web = {

  express: express,

  /**
   * CORS options
   * Can be true/false or an object of CORS options
   * @see {@link https://github.com/expressjs/cors#configuring-cors}
   */
  cors: false,

  /**
   * Middlewares to load (in order)
   */
  middlewares: {
  },

  /**
   * External configuration
   * Must return a promise with the native http/https server instance
   * @return Promise
   */
  externalConfig: (fabrixApp, expressApp) => {
      return Promise.resolve()
  },

  /**
   * The port to bind the web server to
   */
  port: process.env.PORT || 3000,

  /**
   * The host to bind the web server to
   */
  host: process.env.HOST || '0.0.0.0'
}
