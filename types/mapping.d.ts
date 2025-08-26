export default Mapping;
/**
 * Map text locations to CFI ranges
 */
declare class Mapping {
    /**
     * Constructor
     * @param {Layout} layout Layout ref
     * @param {boolean} [dev=false] toggle developer highlighting
     */
    constructor(layout: Layout, dev?: boolean);
    layout: Layout;
    devMode: boolean;
    /**
     * Find CFI pairs for entire section at once
     * @param {any} view
     * @returns {object[]}
     */
    section(view: any): object[];
    /**
     * Find CFI pairs for a page
     * @param {Contents} contents Contents from view
     * @param {string} cfiBase string of the base for a cfi
     * @param {number} start position to start at
     * @param {number} end position to end at
     * @returns {{ start: string, end: string }}
     */
    page(contents: Contents, cfiBase: string, start: number, end: number): {
        start: string;
        end: string;
    };
    /**
     * Walk a node, preforming a function on each node it finds
     * @param {Node} root Node to walkToNode
     * @param {Function} func walk function
     * @return {any} returns the result of the walk function
     * @private
     */
    private walk;
    /**
     * findRanges
     * @param {*} view
     * @returns {object[]} columns
     */
    findRanges(view: any): object[];
    /**
     * Find Start Range
     * @param {Node} root root node
     * @param {number} start position to start at
     * @param {number} end position to end at
     * @return {Range}
     * @private
     */
    private findStart;
    /**
     * Find End Range
     * @param {Node} root root node
     * @param {number} start position to start at
     * @param {number} end position to end at
     * @return {Range}
     * @private
     */
    private findEnd;
    /**
     * Find Text Start Range
     * @param {Node} root root node
     * @param {number} start position to start at
     * @param {number} end position to end at
     * @return {Range}
     * @private
     */
    private findTextStartRange;
    /**
     * Find Text End Range
     * @param {Node} root root node
     * @param {number} start position to start at
     * @param {number} end position to end at
     * @return {Range}
     * @private
     */
    private findTextEndRange;
    /**
     * Split up a text node into ranges for each word
     * @param {Node} root root node
     * @param {string} [splitter=' '] what to split on
     * @return {Array<Range>}
     * @private
     */
    private splitTextNodeIntoRanges;
    /**
     * Turn a pair of ranges into a pair of CFIs
     * @param {string} cfiBase base string for an EpubCFI
     * @param {{ start: Range, end: Range }} rangePair Range pair
     * @return {{ start: string, end: string }} EpubCFI pair
     * @private
     */
    private rangePairToCfiPair;
    /**
     * rangeListToCfiList
     * @param {string} cfiBase
     * @param {object[]} columns
     * @returns {object[]}
     */
    rangeListToCfiList(cfiBase: string, columns: object[]): object[];
    /**
     * Destroy the Mapping object
     */
    destroy(): void;
}
import Layout from "./layout";
import Contents from "./contents";
