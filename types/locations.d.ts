export default Locations;
/**
 * Find Locations for a Book
 * @extends {Map}
 */
declare class Locations extends Map<any, any> {
    /**
     * Constructor
     * @param {Sections} [sections]
     * @param {function} [request]
     * @param {number} [pause=100]
     */
    constructor(sections?: Sections, request?: Function, pause?: number);
    sections: Sections | undefined;
    request: Function | undefined;
    pause: number;
    break: number;
    processing: Defer;
    /**
     * @member {Location} current Current Location
     * @memberof Locations
     * @readonly
     */
    readonly current: Location;
    /**
     * @member {Promise<Locations>} generated
     * @memberof Locations
     * @readonly
     */
    readonly generated: Promise<any>;
    q: Queue;
    /**
     * Load all of sections in the book to generate locations
     * @param {number} [chars] how many chars to split on (default:150)
     * @return {Promise<Locations>} Locations
     */
    generate(chars?: number): Promise<Locations>;
    /**
     * createRange
     * @returns {object}
     * @private
     */
    private createRange;
    /**
     * process
     * @param {Section} section
     * @returns {Promise<Locations>}
     */
    process(section: Section): Promise<Locations>;
    /**
     * parse
     * @param {Element} contents
     * @param {string} cfiBase
     * @param {number} [chars]
     * @returns {Promise<Locations>}
     */
    parse(contents: Element, cfiBase: string, chars?: number): Promise<Locations>;
    /**
     * treeWalker
     * @param {Node} root
     * @param {function} func
     * @returns {Promise<any>}
     * @private
     */
    private treeWalker;
    /**
     * Get a location from an EpubCFI
     * @param {string|EpubCFI} value EpubCFI
     * @return {number} Location index or -1 otherwise
     */
    locationFromCfi(value: string | EpubCFI): number;
    /**
     * Get a percentage position in locations from an EpubCFI
     * @param {string|EpubCFI} cfi EpubCFI
     * @return {number} Percentage
     */
    percentageFromCfi(cfi: string | EpubCFI): number;
    /**
     * Get a percentage position from a location index
     * @param {number} index Location index
     * @return {number} Percentage
     */
    percentageFromLocation(index: number): number;
    /**
     * Get an EpubCFI from location index
     * @param {number} index Location index
     * @return {string|null} EpubCFI string format
     */
    cfiFromLocation(index: number): string | null;
    /**
     * Get an EpubCFI from location percentage
     * @param {number} value Percentage in ranging from 0 to 1
     * @return {string|null} EpubCFI string format
     */
    cfiFromPercentage(value: number): string | null;
    /**
     * Load locations from JSON
     * @param {string} locations
     * @returns {Locations}
     */
    load(locations: string): Locations;
    /**
     * Save locations to JSON
     * @return {string} A JSON string
     */
    save(): string;
    /**
     * Set current location
     * @param {any} key EpubCFI to string
     * @param {any} val Location
     * @example locations.set(key, val)
     * @example locations.set({ cfi })
     * @example locations.set({ index })
     * @example locations.set({ percentage })
     * @returns {any} Locations
     * @override
     */
    override set(key: any, val: any): any;
    /**
     * Destroy the Locations object
     */
    destroy(): void;
}
import Sections from "./sections";
import Defer from "./utils/defer";
import Location from "./location";
import Queue from "./utils/queue";
import Section from "./section";
import EpubCFI from "./epubcfi";
