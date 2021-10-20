
// import { AccesstokenParams, AccesstokenResult } from './interfaces/Authorize';
export * as Authorize from './libs/Authorize';
export * as User from './libs/User';
// import { ajax } from './utils/ajax';

// type Constructor<T = Record<string, unknown>> = new (...args: unknown[]) => T;
// function TimesTamped<TBase extends Constructor>(Base: TBase) {
//     return class extends Base {
//         timestamp = Date.now();
//     };
// }
// export default class TiktokOpenApi {
//     // accesstoken = '';
//     config: AccesstokenParams = {
//         grant_type: '',
//         client_key: '',
//         client_secret: '',
//         code: ''
//     };
//     Authorize = Authorize;
//     User = User;
//     constructor(config: AccesstokenParams) {
//         config.grant_type = 'authorization_code';
//         Object.assign(this.config, config);
//     }
// }
// applyMixins(TiktokOpenApi, Authorize);

// const api = new TiktokOpenApi({ client_key: '', client_secret: '', code: '', grant_type: '' });
// api.Authorize.oauth_accesstoken();

// applyMixins(TiktokOpenApi, [Authorize]);

// function enumerable(value: boolean) {
//     return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//         descriptor.enumerable = value;
//     };
// }
// function UseLocalConfig(target) {
//     return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//         return target(this.config);
//     };
// }
// function applyMixins(derivedCtor: any, baseCtors: typeof User | typeof Authorize) {
//     Object.values(baseCtors).forEach(baseCtor => {
//         derivedCtor[baseCtor.name] = baseCtor;
//         // Object.getOwnPropertyNames(baseCtor).forEach(name => {
//         //     derivedCtor.prototype[name] = baseCtor.prototype[name];
//         // });
//     });
// }