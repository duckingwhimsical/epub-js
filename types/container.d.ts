export default Container;
/**
 * Parsing the Epub Container
 * @link https://www.w3.org/TR/epub/#sec-container-metainf
 */
declare class Container {
    /**
     * @member {string} directory Package directory
     * @memberof Container
     * @readonly
     */
    readonly directory: string;
    /**
     * @member {string} fullPath Path to package file
     * @memberof Container
     * @readonly
     */
    readonly fullPath: string;
    /**
     * @member {string} encoding Encoding
     * @memberof Container
     * @readonly
     */
    readonly encoding: string;
    /**
     * @member {string} mediaType Media type
     * @memberof Container
     * @readonly
     */
    readonly mediaType: string;
    /**
     * @member {string} version
     * @memberof Container
     * @readonly
     */
    readonly version: string;
    /**
     * Clear parts
     */
    clear(): void;
    /**
     * Parse the Container XML
     * @param {Document} doc
     * @returns {Promise<Container>}
     */
    parse(doc: Document): Promise<Container>;
    /**
     * Load a container from JSON
     * @param {object} container
     * @returns {Promise<Container>}
     */
    load(container: object): Promise<Container>;
    /**
     * destroy
     */
    destroy(): void;
}
