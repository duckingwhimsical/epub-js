export default request;
/**
 * request
 * @todo Fallback for url if window isn't defined
 * @param {string|ArrayBuffer} url
 * @param {string} [type]
 * @param {boolean} [withCredentials=false]
 * @param {object[]} [headers=[]]
 * @returns {Promise<any>}
 */
declare function request(url: string | ArrayBuffer, type?: string, withCredentials?: boolean, headers?: object[]): Promise<any>;
