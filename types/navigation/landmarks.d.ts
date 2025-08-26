export default Landmarks;
/**
 * Landmarks Parser
 * @link https://www.w3.org/TR/epub/#sec-nav-landmarks
 * @extends {Map}
 */
declare class Landmarks extends Map<any, any> {
    /**
     * Constructor
     */
    constructor();
    /**
     * Parse Landmarks
     * @param {Node|object[]} target nav
     * @returns {Promise<Landmarks>}
     */
    parse(target: Node | object[]): Promise<Landmarks>;
    /**
     * Parse landmarks from a Epub >= 3.0 Nav
     * @param {Node} node nav
     * @private
     */
    private parseNav;
    /**
     * Create a LandmarkItem
     * @param {Node} node li
     * @return {object|null} LandmarkItem
     * @private
     */
    private navItem;
    /**
     * Load Landmarks from JSON
     * @param {object[]} items Serialized items
     * @private
     */
    private load;
    /**
     * destroy
     */
    destroy(): void;
}
