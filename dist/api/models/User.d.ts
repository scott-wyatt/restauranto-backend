import { FabrixApp } from '@fabrix/fabrix';
import { FabrixModel as Model } from '@fabrix/fabrix/dist/common';
import { SequelizeResolver } from '@fabrix/spool-sequelize';
export declare class User extends Model {
    static readonly resolver: typeof SequelizeResolver;
    static config(app: FabrixApp, Sequelize?: any): {
        options: {};
    };
    static schema(app: FabrixApp, Sequelize?: any): {
        username: {
            type: any;
            allowNull: boolean;
        };
    };
    static associate(models: any): void;
}
