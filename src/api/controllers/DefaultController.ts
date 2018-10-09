import { FabrixController as Controller } from '@fabrix/fabrix/dist/common'

/**
 * @module DefaultController
 *
 * @description Default Controller included with a new Fabrix app
 * @see {@link http://fabrix.app/doc/api/controllers}
 * @this FabrixApp
 */
export class DefaultController extends Controller {

  hello (request, response) {
    response.status(200).json(this.app.services.DefaultService.getApplicationInfo())
  }

  /**
   * Return some info about this application
   */
  info (request, response) {
    response.status(200).json(this.app.services.DefaultService.getApplicationInfo())
  }
}
