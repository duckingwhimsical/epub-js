export default Spine;
/**
 * A collection of Spine Items
 * @extends {Map}
 */
declare class Spine extends Map<any, any> {
    constructor();
    /**
     * Node index from the package.opf
     * @member {number} nodeIndex
     * @memberof Spine
     * @readonly
     */
    readonly nodeIndex: number;
    /**
     * Parse element spine
     * @param {Node} node spine
     * @returns {Promise<Spine>}
     */
    parse(node: Node): Promise<Spine>;
    /**
     * Load spine from JSON
     * @param {object[]} spine
     * @returns {Promise<Spine>}
     */
    load(spine: object[]): Promise<Spine>;
    /**
     * destroy
     */
    destroy(): void;
}
