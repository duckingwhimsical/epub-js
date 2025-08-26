export default Manifest;
/**
 * Manifest class
 * @extends {Map}
 */
declare class Manifest extends Map<any, any> {
    constructor();
    /**
     * @member {string} navPath
     * @memberof Manifest
     * @readonly
     */
    readonly navPath: any;
    /**
     * @member {string} coverPath
     * @memberof Manifest
     * @readonly
     */
    readonly coverPath: any;
    /**
     * Parse the manifest node
     * @param {Node} node manifest
     * @returns {Promise<Manifest>}
     */
    parse(node: Node): Promise<Manifest>;
    /**
     * Find the Cover Path for Epub 2.0
     * @param {Node} node manifest node
     * @return {string} href
     * @private
     */
    private findCoverPath;
    /**
     * Load manifest from JSON
     * @param {object[]} manifest
     * @returns {Promise<Manifest>}
     */
    load(manifest: object[]): Promise<Manifest>;
    /**
     * destroy
     */
    destroy(): void;
}
