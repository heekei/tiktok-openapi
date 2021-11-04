/**
 * @description 对象转query参数
 * @export
 * @param {*} params
 * @return {*}  
 */
export function Object2QueryString(params) {
    return Object.keys(params).reduce((ret, p) => (ret ? (ret + '&') : '') + p + '=' + params[p], '');
}