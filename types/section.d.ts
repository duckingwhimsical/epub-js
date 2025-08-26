export default Section;
/**
 * Represents a Section of the Book
 * In most books this is equivalent to a Chapter
 */
declare class Section {
    /**
     * Constructor
     * @param {object} item Spine Item
     * @param {object} hooks
     */
    constructor(item: object, hooks: object);
    /**
     * @member {string} idref
     * @memberof Section
     * @readonly
     */
    readonly idref: any;
    /**
     * @member {boolean} linear
     * @memberof Section
     * @readonly
     */
    readonly linear: boolean;
    /**
     * @member {number} index
     * @memberof Section
     * @readonly
     */
    readonly index: any;
    /**
     * @member {string} href
     * @memberof Section
     * @readonly
     */
    readonly href: any;
    /**
     * @member {string} url
     * @memberof Section
     * @readonly
     */
    readonly url: any;
    /**
     * @member {string} canonical
     * @memberof Section
     * @readonly
     */
    readonly canonical: any;
    /**
     * @member {string} cfiBase
     * @memberof Section
     * @readonly
     */
    readonly cfiBase: any;
    /**
     * @member {Function} next
     * @memberof Section
     * @readonly
     */
    readonly next: any;
    /**
     * @member {Function} prev
     * @memberof Section
     * @readonly
     */
    readonly prev: any;
    /**
     * @member {string[]} properties
     * @memberof Section
     * @readonly
     */
    readonly properties: any;
    hooks: object;
    /**
     * @member {Document} document
     * @memberof Section
     * @readonly
     */
    readonly document: any;
    /**
     * @member {Element} contents
     * @memberof Section
     * @readonly
     */
    readonly contents: any;
    /**
     * @member {string} output
     * @memberof Section
     * @readonly
     */
    readonly output: string | undefined;
    /**
     * Load the section from its url
     * @param {Function} request a request method to use for loading
     * @return {Promise<Element>} a promise with the xml document
     */
    load(request: Function): Promise<Element>;
    /**
     * Render the contents of a section
     * @todo better way to return this from hooks?
     * @param {Function} request a request method to use for loading
     * @return {Promise<string>} output a serialized XML Document
     */
    render(request: Function): Promise<string>;
    /**
     * Find a string in a section
     * @param {string} query The query string to find
     * @return {object[]} A list of matches, with form { cfi, excerpt }
     */
    find(query: string): object[];
    /**
     * Search a string in multiple sequential Element of the section.
     * If the document.createTreeWalker api is missed(eg: IE8), use
     * `find` as a fallback.
     * @param {string} query The query string to search
     * @param {number} [maxSeqEle=5] The maximum number of Element that are combined for search, default value is 5.
     * @return {object[]} A list of matches, with form { cfi, excerpt }
     */
    search(query: string, maxSeqEle?: number): object[];
    /**
     * Get a CFI from a Range in the Section
     * @param {Range} range
     * @return {string} cfi an EpubCFI string
     */
    cfiFromRange(range: Range): string;
    /**
     * Get a CFI from an Element in the Section
     * @param {Element} el
     * @return {string} cfi an EpubCFI string
     */
    cfiFromElement(el: Element): string;
    /**
     * Unload the section document
     */
    unload(): void;
    /**
     * destroy
     */
    destroy(): void;
}
