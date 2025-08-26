export default Contents;
/**
 * Handles DOM manipulation, queries and events for View contents
 */
declare class Contents {
    /**
     * Constructor
     * @param {Document} doc Document
     * @param {Element} content Parent Element (typically Body)
     * @param {Section} section Section object reference
     */
    constructor(doc: Document, content: Element, section: Section);
    document: Document;
    /**
     * @member {Element} content document.body by current location
     * @memberof Contents
     * @readonly
     */
    readonly content: Element;
    /**
     * @member {object} contentRect
     * @memberof Contents
     * @readonly
     */
    readonly contentRect: {
        bottom: number;
        height: number;
        left: number;
        right: number;
        top: number;
        width: number;
        x: number;
        y: number;
    };
    /**
     * @member {Section} section
     * @memberof Contents
     * @readonly
     */
    readonly section: Section;
    scripts: Map<any, any>;
    styles: Map<any, any>;
    active: boolean;
    window: (Window & typeof globalThis) | null;
    /**
     * @member {string} mode writing-mode
     * @memberof Contents
     * @readonly
     */
    readonly mode: any;
    /**
     * Get or Set width
     * @param {number} [w]
     * @returns {number} width
     */
    width(w?: number): number;
    /**
     * Get or Set height
     * @param {number} [h]
     * @returns {number} height
     */
    height(h?: number): number;
    /**
     * Get size of the text using Range
     * @returns {{ width: number, height: number }}
     */
    textSize(): {
        width: number;
        height: number;
    };
    /**
     * Get documentElement scrollWidth
     * @returns {number} width
     */
    scrollWidth(): number;
    /**
     * Get documentElement scrollHeight
     * @returns {number} height
     */
    scrollHeight(): number;
    /**
     * Set overflow css style of the contents
     * @param {string} [overflow]
     * @returns {string}
     */
    overflow(overflow?: string): string;
    /**
     * Set overflowX css style of the documentElement
     * @param {string} [overflow]
     * @returns {string}
     */
    overflowX(overflow?: string): string;
    /**
     * Set overflowY css style of the documentElement
     * @param {string} [overflow]
     * @returns {string}
     */
    overflowY(overflow?: string): string;
    /**
     * Set Css styles on the contents element (typically Body)
     * @param {string} property
     * @param {string} value
     * @param {boolean} [priority] set as "important"
     * @returns {any}
     */
    css(property: string, value: string, priority?: boolean): any;
    /**
     * Get or Set the viewport element
     * @param {object} [options]
     * @param {string} [options.width]
     * @param {string} [options.height]
     * @param {string} [options.scale]
     * @param {string} [options.minimum]
     * @param {string} [options.maximum]
     * @param {string} [options.scalable]
     * @returns {object}
     */
    viewport(options?: {
        width?: string | undefined;
        height?: string | undefined;
        scale?: string | undefined;
        minimum?: string | undefined;
        maximum?: string | undefined;
        scalable?: string | undefined;
    }): object;
    /**
     * Event emitter for when the contents has expanded
     * @private
     */
    private expand;
    /**
     * content resize event handler
     * @param {object[]} entries
     * @private
     */
    private resize;
    /**
     * Get the documentElement
     * @returns {Element} documentElement
     */
    root(): Element;
    /**
     * Get the location offset of a EpubCFI or an #id
     * @param {string | EpubCFI} target
     * @param {string} [ignoreClass] for the cfi
     * @returns {{ left: number, top: number }} target position left and top
     */
    locationOf(target: string | EpubCFI, ignoreClass?: string): {
        left: number;
        top: number;
    };
    /**
     * Create stylesheet link
     * @param {string} key
     * @param {string} src
     * @returns {Promise<Node>}
     * @private
     */
    private createLink;
    /**
     * Create stylesheet rules
     * @param {string} key
     * @param {object} rules
     * @returns {Promise<Node>}
     * @private
     */
    private createStyle;
    /**
     * Append a stylesheet link/rules to the document head
     * @param {string} key
     * @param {string|object} input url or rules
     * @returns {Promise<Node>}
     * @example appendStylesheet("common", "/pach/to/stylesheet.css")
     * @example appendStylesheet("common", "https://example.com/to/stylesheet.css")
     * @example appendStylesheet("common", { h1: { "font-size": "1.5em" }})
     */
    appendStylesheet(key: string, input: string | object): Promise<Node>;
    /**
     * Remove a stylesheet link from the document head
     * @param {string} key
     * @returns {boolean}
     */
    removeStylesheet(key: string): boolean;
    /**
     * Clear all injected stylesheets
     */
    clearStylesheets(): void;
    /**
     * Append a script node to the document head
     * @param {string} key
     * @param {string} src url
     * @example appendScript("common", "/path/to/script.js")
     * @example appendScript("common", "https://examples.com/to/script.js")
     * @returns {Promise<Node>} loaded
     */
    appendScript(key: string, src: string): Promise<Node>;
    /**
     * Remove a script node from the document head
     * @param {string} key
     * @returns {boolean}
     */
    removeScript(key: string): boolean;
    /**
     * Clear all injected scripts
     */
    clearScripts(): void;
    /**
     * Append a class to the contents container
     * @param {string} className
     */
    appendClass(className: string): void;
    /**
     * Remove a class from the contents container
     * @param {string} className
     */
    removeClass(className: string): void;
    /**
     * Get a Dom Range from EpubCFI
     * @param {EpubCFI} cfi
     * @param {string} [ignoreClass]
     * @returns {Range} range
     */
    range(cfi: EpubCFI, ignoreClass?: string): Range;
    /**
     * Get an EpubCFI from a Dom Range
     * @param {Range} range
     * @param {string} [ignoreClass]
     * @returns {string} EpubCFI
     */
    cfiFromRange(range: Range, ignoreClass?: string): string;
    /**
     * Get an EpubCFI from a Dom node
     * @param {Node} node
     * @param {string} [ignoreClass]
     * @returns {string} EpubCFI
     */
    cfiFromNode(node: Node, ignoreClass?: string): string;
    /**
     * map
     * @param {Layout} layout
     * @todo find where this is used - remove?
     * @returns {object[]}
     */
    map(layout: Layout): object[];
    /**
     * Apply CSS to a Document
     * @param {Layout} layout
     */
    format(layout: Layout): void;
    /**
     * Size the contents to a given width and height
     * @param {Layout} layout
     * @private
     */
    private size;
    /**
     * Apply columns to the contents for pagination
     * @param {Layout} layout
     * @private
     */
    private columns;
    /**
     * Scale contents from center
     * @param {number} scale
     * @param {number} offsetX
     * @param {number} offsetY
     */
    scale(scale: number, offsetX: number, offsetY: number): void;
    /**
     * Set the direction of the text
     * @param {string} [dir='ltr'] values: `"ltr"` OR `"rtl"`
     */
    direction(dir?: string): void;
    /**
     * mapPage
     * @param {string} cfiBase
     * @param {Layout} layout
     * @param {number} start
     * @param {number} end
     * @param {boolean} dev
     * @returns {any}
     */
    mapPage(cfiBase: string, layout: Layout, start: number, end: number, dev: boolean): any;
    /**
     * Set the writingMode of the text
     * @param {string} [mode='horizontal-tb'] `"horizontal-tb"` OR `"vertical-rl"` OR `"vertical-lr"`
     */
    writingMode(mode?: string): any;
    /**
     * Append listeners
     * @private
     */
    private appendListeners;
    resizeObserver: ResizeObserver | undefined;
    /**
     * Remove listeners
     * @private
     */
    private removeListeners;
    /**
     * Emit passed browser events
     * @private
     */
    private triggerEvent;
    /**
     * Handle getting text on selection
     * @private
     */
    private selectionHandler;
    selectionEndTimeout: NodeJS.Timeout | undefined;
    /**
     * Test if images are loaded or add listener for when they load
     * @private
     */
    private imageLoadListeners;
    /**
     * Listen for media query changes and emit 'expand' event
     * Adapted from: https://github.com/tylergaw/media-query-events/blob/master/js/mq-events.js
     * @private
     */
    private mediaQueryListeners;
    /**
     * Listen for font load and check for resize when loaded (unused)
     * @private
     */
    private fontLoadListeners;
    /**
     * Use css transitions to detect resize (unused)
     * @private
     */
    private transitionListeners;
    /**
     * Use MutationObserver to listen for changes in
     * the DOM and check for resize (unused)
     * @private
     */
    private mutationListener;
    mutationObserver: MutationObserver | undefined;
    /**
     * destroy
     */
    destroy(): void;
}
import Section from "./section";
import EpubCFI from "./epubcfi";
import Layout from "./layout";
