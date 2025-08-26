export default EpubCFI;
/**
 * Parsing and creation of EpubCFIs:
 * @link https://idpf.org/epub/linking/cfi/epub-cfi.html
 *
 * Implements:
 * - Character Offset: `epubcfi(/6/4[chap01ref]!/4[body01]/10[para05]/2/1:3)`
 * - Simple Ranges: `epubcfi(/6/4[chap01ref]!/4[body01]/10[para05],/2/1:1,/3:4)`
 *
 * Does Not Implement:
 * - Temporal Offset `(~)`
 * - Spatial Offset `(@)`
 * - Temporal-Spatial Offset `(~ + @)`
 * - Text Location Assertion `([)`
 */
declare class EpubCFI {
    /**
     * Constructor
     * @param {string|Range|Node} [data] values: 'epubcfi(..)' OR range OR node
     * @param {string|object} [base] base component
     * @param {string} [ignoreClass] class to ignore when parsing DOM
     * @example new EpubCFI()
     * @example new EpubCFI("epubcfi(/6/2[cover]!/6)")
     * @example new EpubCFI("epubcfi(/6/2[cover]!/6)", "/6/6[end]")
     * @example new EpubCFI("epubcfi(/6/2[cover]!/6)", "/6/6[end]", "token-hl")
     */
    constructor(data?: string | Range | Node, base?: string | object, ignoreClass?: string);
    /**
     * Base component
     * @member {object} base
     * @memberof EpubCFI
     * @readonly
     */
    readonly base: {};
    /**
     * EpubCFI string format
     * @member {string} hash
     * @memberof EpubCFI
     * @readonly
     */
    readonly hash: string;
    /**
     * @member {string} ignoreClass
     * @memberof EpubCFI
     * @readonly
     */
    readonly ignoreClass: string;
    /**
     * Path component
     * @member {object} path
     * @memberof EpubCFI
     * @readonly
     */
    readonly path: {};
    /**
     * @member {boolean} range
     * @memberof EpubCFI
     * @readonly
     */
    readonly range: boolean;
    /**
     * Spine position
     * @member {number} spinePos
     * @memberof EpubCFI
     * @readonly
     */
    readonly spinePos: number;
    /**
     * Start component
     * @member {object} start
     * @memberof EpubCFI
     * @readonly
     */
    readonly start: any;
    /**
     * End component
     * @member {object} end
     * @memberof EpubCFI
     * @readonly
     */
    readonly end: any;
    /**
     * @member {string} type
     * @memberof EpubCFI
     * @readonly
     */
    readonly type: any;
    /**
     * Set object data options
     * @param {object} [options]
     * @param {string|Range|Node} [options.data]
     * @param {string|object} [options.base]
     * @param {string} [options.ignoreClass]
     * @returns {EpubCFI}
     * @example in: epubcfi.set({ data: "epubcfi(/6/2[cover]!/6)" })
     * @example in: epubcfi.set({ data: range })
     * @example in: epubcfi.set({ data: node })
     * @example in: epubcfi.set({ base: "/6/6[end]" })
     * @example in: epubcfi.set({ ignoreClass: "annotator-hl" })
     */
    set(options?: {
        data?: string | Node | Range | undefined;
        base?: string | object | undefined;
        ignoreClass?: string | undefined;
    }): EpubCFI;
    /**
     * Check the type to input
     * @param {string|Range|Node} cfiFrom
     * @returns {string|undefined} argument type
     */
    checkType(cfiFrom: string | Range | Node): string | undefined;
    /**
     * Collapse a CFI Range to a single CFI Position
     * @param {boolean} [toStart]
     */
    collapse(toStart?: boolean): void;
    /**
     * Compare which of two CFIs is earlier in the text
     * @param {string|EpubCFI} cfiOne
     * @param {string|EpubCFI} cfiTwo
     * @returns {number} First is earlier = -1, Second is earlier = 1, They are equal = 0
     */
    compare(cfiOne: string | EpubCFI, cfiTwo: string | EpubCFI): number;
    /**
     * Generate chapter component
     * @param {number} spineNodeIndex
     * @param {number} position
     * @param {string} [id]
     * @returns {string} EpubCFI string format
     */
    generateChapterComponent(spineNodeIndex: number, position: number, id?: string): string;
    /**
     * Get chapter component
     * @param {string} cfiStr EpubCFI string format
     * @example in: /6/4!/4/1:0 out: /6/4
     * @returns {string} Base component
     * @private
     */
    private getBaseComponent;
    /**
     * Get path component
     * @param {string} cfiStr EpubCFI string format
     * @example in: /6/4!/4/1:0 out: /4/1:0
     * @returns {string} Path component
     * @private
     */
    private getPathComponent;
    /**
     * getRange
     * @param {string} cfiStr EubCFI string format
     * @example in: /6/4!/4/1:0
     * @returns {object[]|null} An array of ranges or null if the array length is not 3
     * @private
     */
    private getRange;
    /**
     * Get the offset component of a character (unused)
     * @param {string} cfiStr
     * @returns {string}
     * @private
     */
    private getCharacterOffsetComponent;
    /**
     * Check if a string is wrapped with "epubcfi()"
     * @param {string} str EpubCFI string format
     * @returns {boolean} `true` if the string is valid, `false` otherwise
     */
    isCfiString(str: string): boolean;
    /**
     * joinSteps
     * @param {object[]} steps
     * @returns {string}
     * @private
     */
    private joinSteps;
    /**
     * pathTo
     * @param {Node} node
     * @param {number} offset
     * @param {string} [ignoreClass]
     * @returns {object} segment object
     * @private
     */
    private pathTo;
    /**
     * equalStep
     * @param {object} stepA
     * @param {object} stepB
     * @returns {boolean}
     * @private
     */
    private equalStep;
    /**
     * filter
     * @param {Node} node
     * @param {string} [ignoreClass]
     * @returns {Node}
     * @private
     */
    private filter;
    /**
     * filteredPosition
     * @param {Node} node
     * @param {string} [ignoreClass]
     * @returns {number} index
     * @private
     */
    private filteredPosition;
    /**
     * filteredStep
     * @param {Node} node
     * @param {string} ignoreClass
     * @returns {object} step
     * @private
     */
    private filteredStep;
    /**
     * findNode
     * @param {object[]} steps
     * @param {Document} [doc]
     * @param {string} [ignoreClass]
     * @returns {Node}
     * @private
     */
    private findNode;
    /**
     * fixMiss
     * @param {object[]} steps
     * @param {number} offset
     * @param {Document} [doc]
     * @param {string} [ignoreClass]
     * @returns {object|void}
     * @private
     */
    private fixMiss;
    /**
     * Create a EpubCFI object from a Node
     * @param {Node} node
     * @param {string|object} base
     * @param {string} [ignoreClass]
     * @returns {EpubCFI}
     */
    fromNode(node: Node, base: string | object, ignoreClass?: string): EpubCFI;
    /**
     * Create a CFI object from a Range
     * @param {Range} range
     * @param {string|object} base
     * @param {string} [ignoreClass]
     * @returns {EpubCFI}
     */
    fromRange(range: Range, base: string | object, ignoreClass?: string): EpubCFI;
    /**
     * normalizedMap
     * @param {Node[]} children
     * @param {number} nodeType
     * @param {string} [ignoreClass]
     * @returns {object}
     * @private
     */
    private normalizedMap;
    /**
     * Parse a cfi string to a EpubCFI object representation
     * @todo Comparison of the base component from the parse method
     * @param {string} hash EpubCFI string format
     * @returns {EpubCFI} EpubCFI object
     */
    parse(hash: string): EpubCFI;
    /**
     * Parsing the component string value
     * @param {string} value string value
     * @example in: /4/1:1 out: object
     * @returns {object} component object
     * @private
     */
    private parseComponent;
    /**
     * Parsing the step string value
     * Check if step is a text node or element
     * @param {string} str string value
     * @returns {object} step object
     * @private
     */
    private parseStep;
    /**
     * Parsing the terminal string value
     * @param {string} str string value
     * @returns {object} terminal object
     * @private
     */
    private parseTerminal;
    /**
     * Get patch offset of text node
     * @param {Node} node
     * @param {number} offset
     * @param {string} [ignoreClass]
     * @returns {number} Total offset
     * @private
     */
    private patchOffset;
    /**
     * Get position index
     * @param {Node} node
     * @returns {number} Position index
     * @private
     */
    private position;
    /**
     * segmentString
     * @param {object} segment
     * @returns {string}
     * @private
     */
    private segmentString;
    /**
     * step
     * @param {Node} node
     * @returns {object} step object
     * @private
     */
    private step;
    /**
     * stepsToXpath
     * @param {object[]} steps
     * @returns {string}
     * @private
     */
    private stepsToXpath;
    /**
     * stepsToQuerySelector (unused)
     * @param {object[]} steps
     * @returns {string}
     * @private
     */
    private stepsToQuerySelector;
    /**
     * textNodes
     * @param {Node} container
     * @param {string} [ignoreClass]
     * @returns {object[]}
     * @private
     */
    private textNodes;
    /**
     * Creates a DOM range representing a CFI
     * @param {Document} [doc] document referenced in the base
     * @param {string} [ignoreClass]
     * @return {Range}
     */
    toRange(doc?: Document, ignoreClass?: string): Range;
    /**
     * Convert CFI to a epubcfi(...) string
     * @returns {string} EpubCFI string format
     */
    toString(): string;
    /**
     * walkToNode
     * @param {object[]} steps
     * @param {Document} [doc]
     * @param {string} [ignoreClass]
     * @returns {Node}
     * @private
     */
    private walkToNode;
    /**
     * Destroy the EpubCFI object
     */
    destroy(): void;
}
