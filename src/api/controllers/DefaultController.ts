import { FabrixController as Controller } from '@fabrix/fabrix/dist/common'

/**
 * @module DefaultController
 *
 * @description Default Controller included with a new Fabrix app
 * @see {@link http://fabrix.app/doc/api/controllers}
 * @this FabrixApp
 */
export class DefaultController extends Controller {

  hello (req, res) {
    res.status(200).json(this.app.services.AuthService.getApplicationInfo())
  }

  /**
   * Return some info about this application
   */
  info (req, res) {
    res.status(200).json(this.app.services.AuthService.getApplicationInfo())
  }
}
