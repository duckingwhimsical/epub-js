export default PageList;
/**
 * Page List Parser
 * @link https://www.w3.org/TR/epub/#sec-nav-pagelist
 * @extends {Array}
 */
declare class PageList extends Array<any> {
    /**
     * Constructor
     */
    constructor();
    epubcfi: EpubCFI;
    /**
     * Page indexes
     * @member {number[]} pages
     * @memberof PageList
     * @readonly
     */
    readonly pages: any[];
    /**
     * @member {string[]} locations
     * @memberof PageList
     * @readonly
     */
    readonly locations: any[];
    /**
     * @member {number} firstPage
     * @memberof PageList
     * @readonly
     */
    readonly firstPage: number;
    /**
     * @member {number} lastPage
     * @memberof PageList
     * @readonly
     */
    readonly lastPage: number;
    /**
     * @member {number} totalPages
     * @memberof PageList
     * @readonly
     */
    readonly totalPages: number;
    /**
     * Parse Page List
     * @param {Node|object[]} target
     * @returns {Promise<PageList>}
     */
    parse(target: Node | object[]): Promise<PageList>;
    /**
     * Parse page-list from a Epub >= 3.0 Nav
     * @param {Node} node nav
     * @private
     */
    private parseNav;
    /**
     * Create navItem
     * @param {Node} node li
     * @return {object} PageList item
     * @private
     */
    private navItem;
    /**
     * parseNcx
     * @param {Node} node pageList
     * @private
     */
    private parseNcx;
    /**
     * Create ncxItem
     * @param {Node} node pageTarget
     * @returns {object}
     * @private
     */
    private ncxItem;
    /**
     * Process pageList items
     * @private
     */
    private process;
    /**
     * Get a page index from a EpubCFI
     * @param {string} cfi EpubCFI
     * @return {number} Page index
     */
    pageFromCfi(cfi: string): number;
    /**
     * Get a EpubCFI by Page index
     * @param {string|number} pg Page index
     * @return {string|null} cfi
     */
    cfiFromPage(pg: string | number): string | null;
    /**
     * Get a Page index from Book percentage
     * @param {number} value Percentage
     * @return {number} Page index
     */
    pageFromPercentage(value: number): number;
    /**
     * Returns a value between 0 - 1 corresponding to the location of a page
     * @param {number} pg the page
     * @return {number} Percentage
     */
    percentageFromPage(pg: number): number;
    /**
     * Returns a value between 0 - 1 corresponding to the location of a cfi
     * @param {string} cfi EpubCFI
     * @return {number} Percentage
     */
    percentageFromCfi(cfi: string): number;
    /**
     * Load PageList from JSON
     * @param {object[]} items Serialized JSON data items
     * @private
     */
    private load;
    /**
     * Clear PageList
     */
    clear(): void;
    /**
     * Destroy
     */
    destroy(): void;
}
import EpubCFI from "../epubcfi";
