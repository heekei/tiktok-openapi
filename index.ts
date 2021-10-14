import AccountAuthorize from './libs/AccountAuthorize';
export default class TiktokOpenApi extends AccountAuthorize {
    constructor() {
        super();
    }
    // async test() {
    //     // const data = await this.Accesstoken({ client_key: '', code: '', grant_type: '', client_secret: '' });
    //     const data = await this.RenewRefreshToken({ client_key: '', refresh_token: '' });
    // }
}

// namespace TiktokOpenApi {
//     AccountAuthorize;
// }