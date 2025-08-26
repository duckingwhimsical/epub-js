export default Navigation;
/**
 * Navigation Parser
 * @link https://www.w3.org/TR/epub/#sec-nav
 */
declare class Navigation {
    /**
     * Landmarks
     * @member {Landmarks} landmarks
     * @memberof Navigation
     * @readonly
     */
    readonly landmarks: Landmarks;
    /**
     * List of numbered pages
     * @member {PageList} pageList
     * @memberof Navigation
     * @readonly
     */
    readonly pageList: PageList;
    /**
     * Table of Contents
     * @member {Toc} toc
     * @memberof Navigation
     * @readonly
     */
    readonly toc: Toc;
    /**
     * Clear all navigation parts
     */
    clear(): void;
    /**
     * Parse navigation document
     * @param {Document} doc html OR xhtml OR ncx
     * @returns {Promise<Navigation>}
     */
    parse(doc: Document): Promise<Navigation>;
    /**
     * Load navigation object from JSON
     * @param {object} data
     * @returns {Promise<Navigation>}
     */
    load(data: object): Promise<Navigation>;
    /**
     * forEach pass through
     * @param {Array} args
     */
    forEach(...args: any[]): void;
    /**
     * Destroy the Navigation object
     */
    destroy(): void;
}
import Landmarks from "./navigation/landmarks";
import PageList from "./navigation/pagelist";
import Toc from "./navigation/toc";
