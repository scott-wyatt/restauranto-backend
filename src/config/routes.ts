/**
 * Routes Configuration
 *
 * Configure how url patterns map to controllers, views, and static files.
 *
 * @see {@link http://fabrix.app/docs/config/routes}
 */

export const routes = {

    /**
     * Constrain the DefaultController.info handler to accept only GET requests.
     */
    '/': {
      'GET': 'DefaultController.hello'
    },

    '/v1/login': {
      'GET': 'DefaultController.info',
      'POST': 'DefaultController.info'
    },

    '/v1/default/info': {
      'GET': 'DefaultController.info'
    }
  }
