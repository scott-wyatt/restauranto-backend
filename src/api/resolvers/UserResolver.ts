import { SequelizeResolver } from '@fabrix/spool-sequelize'

export class UserResolver extends SequelizeResolver {

  findHappy(options = {}) {
    this.findAll({ where: { happy: true} })
  }
}
