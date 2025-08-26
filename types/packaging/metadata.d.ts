export default Metadata;
/**
 * Metadata class
 * @extends {Map}
 */
declare class Metadata extends Map<any, any> {
    constructor();
    /**
     * Legacy spec (2.x) support
     * @member {Node} cover
     * @memberof Metadata
     * @readonly
     */
    readonly cover: Node | null | undefined;
    /**
     * Parse the metadata node
     * @param {Node} node metadata
     * @returns {Promise<Metadata>}
     */
    parse(node: Node): Promise<Metadata>;
    /**
     * Parse the meta node
     * @param {Node} item
     * @returns {void}
     * @private
     */
    private parseMeta;
    /**
     * Load metadata from JSON
     * @param {object} metadata
     * @returns {Promise<Metadata>}
     */
    load(metadata: object): Promise<Metadata>;
    /**
     * destroy
     */
    destroy(): void;
}
