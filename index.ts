
import { AccesstokenParams } from './interfaces/Authorize';
import * as Authorize from './libs/Authorize';

// type Constructor<T = Record<string, unknown>> = new (...args: unknown[]) => T;
// function TimesTamped<TBase extends Constructor>(Base: TBase) {
//     return class extends Base {
//         timestamp = Date.now();
//     };
// }
export default class TiktokOpenApi {
    accesstoken = '';
    constructor(config: AccesstokenParams) {
        config.grant_type = 'authorization_code';
        Authorize.oauth_accesstoken(config);
    }
}
// applyMixins(TiktokOpenApi, [Authorize]);



// function applyMixins(derivedCtor: any, baseCtors: any[]) {
//     baseCtors.forEach(baseCtor => {
//         Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
//             derivedCtor.prototype[name] = baseCtor.prototype[name];
//         });
//     });
// }