export declare const web: {
    express: any;
    cors: boolean;
    middlewares: {};
    externalConfig: (fabrixApp: any, expressApp: any) => Promise<void>;
    port: string | number;
    host: string;
};
