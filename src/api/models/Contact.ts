import { FabrixApp } from '@fabrix/fabrix'
import { FabrixModel as Model } from '@fabrix/fabrix/dist/common'
import { SequelizeResolver } from '@fabrix/spool-sequelize'

/**
 * @module Contact
 * @description Contact object
 */
export class Contact extends Model {
  static get resolver () {
    return SequelizeResolver
  }

  static config(app: FabrixApp, Sequelize?) {
    return {
      options: { }
    }
  }

  static schema (app: FabrixApp, Sequelize?) {
    return {
      username: {
        type: Sequelize.STRING,
        allowNull: false
      }
    }
  }

  static associate(models) {
  }
}
