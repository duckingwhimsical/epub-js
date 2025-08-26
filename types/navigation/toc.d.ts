export default Toc;
/**
 * Table Of Contents Parser
 * @link https://www.w3.org/TR/epub/#sec-nav-toc
 * @extends {Array}
 */
declare class Toc extends Array<any> {
    /**
     * Constructor
     */
    constructor();
    /**
     * @member {Map} links
     * @memberof Toc
     * @readonly
     */
    readonly links: Map<any, any>;
    /**
     * Get navigation item by href
     * @param {string} target
     * @return {object} navItem
     * @example toc.get("chapter_001.xhtml")
     */
    get(target: string): object;
    /**
     * Parse out the toc items
     * @param {Node|object[]} target
     * @returns {Promise<Toc>}
     */
    parse(target: Node | object[]): Promise<Toc>;
    /**
     * Parse toc from a Epub >= 3.0 Nav
     * @param {Node} nav
     * @param {object[]} [toc=null]
     * @param {string} [parentId=null]
     * @private
     */
    private parseNav;
    /**
     * Create a navItem
     * @param {Node} node
     * @return {object|null} navItem
     * @private
     */
    private navItem;
    /**
     * Parse from a Epub 2 NCX
     * @link https://www.w3.org/TR/epub/#sec-opf2-ncx
     * @param {Node} node navMap
     * @param {object[]} [toc=null]
     * @param {string} [parentId=null]
     * @private
     */
    private parseNcx;
    /**
     * Create a ncxItem
     * @param {Node} node navPoint
     * @return {object} ncxItem
     * @private
     */
    private ncxItem;
    /**
     * Load navigation items from JSON
     * @param {object[]} items Serialized JSON items
     * @param {number} [level=0]
     * @param {string} [parentId=null]
     * @private
     */
    private load;
    /**
     * Clear navigation items
     */
    clear(): void;
    /**
     * destroy
     */
    destroy(): void;
}
