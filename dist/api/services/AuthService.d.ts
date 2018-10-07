/// <reference types="node" />
import { FabrixService as Service } from '@fabrix/fabrix/dist/common';
export declare class AuthService extends Service {
    getApplicationInfo(): {
        app: any;
        node: string;
        libs: NodeJS.ProcessVersions;
        spools: any;
    };
}
