import { FabrixApp } from '@fabrix/fabrix';
import { FabrixModel as Model } from '@fabrix/fabrix/dist/common';
import { SequelizeResolver } from '@fabrix/spool-sequelize';
export declare class WebToken extends Model {
    static readonly resolver: typeof SequelizeResolver;
    static config(app: FabrixApp, Sequelize: any): {
        options: {};
    };
    static schema(app: FabrixApp, Sequelize: any): {
        issuer: {
            type: any;
        };
        expiration: {
            type: any;
        };
        scopes: {
            type: any;
        };
        subject: {
            type: any;
        };
        token: {
            type: any;
        };
    };
    static associate(models: any): void;
}
