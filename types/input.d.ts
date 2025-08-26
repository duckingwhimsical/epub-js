export default Input;
/**
 * Base class for Archive and Storage
 */
declare class Input {
    /**
     * @member {object} instance
     * @memberof Input
     * @readonly
     */
    readonly instance: any;
    /**
     * Request a URL from entries
     * @param {string} url a URL to request
     * @param {string} [type] specify the type of the returned result
     * @returns {Promise<Blob|string|JSON|Document|XMLDocument>}
     */
    request(url: string, type?: string): Promise<Blob | string | JSON | Document | XMLDocument>;
    /**
     * Handle the response from request
     * @param {any} response
     * @param {string} [type]
     * @returns {any} the parsed result
     */
    handleResponse(response: any, type?: string): any;
    /**
     * Get a Blob from entries by URL
     * @param {string} url
     * @param {string} [mimeType]
     * @returns {Promise<Blob|null>}
     * @abstract
     */
    getBlob(url: string, mimeType?: string): Promise<Blob | null>;
    /**
     * Get a Text from entries by URL
     * @param {string} url
     * @param {string} [mimeType]
     * @returns {Promise<string|null>}
     * @abstract
     */
    getText(url: string, mimeType?: string): Promise<string | null>;
    /**
     * Get a base64 encoded result from entries by URL
     * @param {string} url
     * @param {string} [mimeType]
     * @returns {Promise<string|null>} base64 encoded
     * @abstract
     */
    getBase64(url: string, mimeType?: string): Promise<string | null>;
    /**
     * destroy
     */
    destroy(): void;
}
