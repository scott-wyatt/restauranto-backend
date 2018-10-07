import { ExpressSpool } from '@fabrix/spool-express';
import { GenericsSpool } from '@fabrix/spool-generics';
import { RouterSpool } from '@fabrix/spool-router';
import { WinstonSpool } from '@fabrix/spool-winston';
export declare const main: {
    spools: (typeof ExpressSpool | typeof GenericsSpool | typeof RouterSpool | typeof WinstonSpool)[];
    paths: {
        root: string;
        temp: string;
    };
};
