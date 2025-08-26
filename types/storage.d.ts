export default Storage;
/**
 * Handles saving and requesting files from local storage
 * @extends {Input}
 */
declare class Storage extends Input {
    /**
     * Constructor
     * @param {string} name This should be the name of the application for modals
     */
    constructor(name: string);
    /**
     * @member {string} name
     * @memberof Storage
     * @readonly
     */
    readonly name: string;
    /**
     * @member {boolean} online Current status
     * @memberof Storage
     * @readonly
     */
    readonly online: boolean;
    /**
     * Create LocalForage instance
     */
    createInstance(): void;
    /**
     * Append event listeners
     * @private
     */
    private appendListeners;
    /**
     * Remove event listeners
     * @private
     */
    private removeListeners;
    /**
     * Update the online / offline status
     * @param {Event} event
     * @private
     */
    private status;
    /**
     * Get entry from Storage
     * @param {string|number} input key
     * @returns {Promise<any>}
     * @example storage.get(0).then(data => ...)
     * @example storage.get('https://example.com/to/book.epub').then(data => ...)
     */
    get(input: string | number): Promise<any>;
    /**
     * Set data into Storage
     * @param {string|number} input
     * @param {ArrayBuffer} data
     * @return {Promise<ArrayBuffer|null>}
     */
    set(input: string | number, data: ArrayBuffer): Promise<ArrayBuffer | null>;
    /**
     * Put data into Storage
     * @param {string} url
     * @returns {Promise<ArrayBuffer>}
     */
    put(url: string): Promise<ArrayBuffer>;
    /**
     * Dispatch a request by URL
     * @param {string} url a url to request from storage
     * @param {string} [type] specify the type of the returned result
     * @param {boolean} [withCredentials]
     * @param {string[]} [headers]
     * @return {Promise<Blob|string|JSON|Document|XMLDocument>}
     */
    dispatch(url: string, type?: string, withCredentials?: boolean, headers?: string[]): Promise<Blob | string | JSON | Document | XMLDocument>;
    /**
     * Get entry key from input
     * @param {string|number} input
     * @returns {string} key
     * @private
     */
    private getKey;
}
import Input from "./input";
