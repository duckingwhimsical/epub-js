export default Rendition;
/**
 * Rendition class
 * @description
 * Displays an Epub as a series of Views for each Section.
 * Requires Manager and View class to handle specifics of rendering
 * the section content.
 */
declare class Rendition {
    /**
     * Constructor
     * @param {Book} book
     * @param {object} [options]
     * @param {string|number} [options.width] viewport width
     * @param {string|number} [options.height] viewport height
     * @param {string} [options.ignoreClass] class for the cfi parser to ignore
     * @param {string|function} [options.manager='default'] string values: default / continuous
     * @param {string|function} [options.view='iframe']
     * @param {string} [options.method='write'] values: `"write"` OR `"srcdoc"`
     * @param {string} [options.layout] layout to force
     * @param {string} [options.spread] force spread value
     * @param {string} [options.direction] direction `"ltr"` OR `"rtl"`
     * @param {number} [options.pageWidth] page width
     * @param {number} [options.pageHeight] page height
     * @param {number} [options.minSpreadWidth] overridden by spread: none (never) / both (always)
     * @param {string} [options.stylesheet] url of stylesheet to be injected
     * @param {string} [options.script] url of script to be injected
     * @param {object} [options.snap] use snap scrolling
     * @param {string[]} [options.sandbox=[]] iframe sandbox policy list
     */
    constructor(book: Book, options?: {
        width?: string | number | undefined;
        height?: string | number | undefined;
        ignoreClass?: string | undefined;
        manager?: string | Function | undefined;
        view?: string | Function | undefined;
        method?: string | undefined;
        layout?: string | undefined;
        spread?: string | undefined;
        direction?: string | undefined;
        pageWidth?: number | undefined;
        pageHeight?: number | undefined;
        minSpreadWidth?: number | undefined;
        stylesheet?: string | undefined;
        script?: string | undefined;
        snap?: object | undefined;
        sandbox?: string[] | undefined;
    });
    /**
     * @member {object} settings
     * @memberof Rendition
     * @readonly
     */
    readonly settings: object;
    book: Book;
    /**
     * Adds Hook methods to the Rendition prototype
     * @member {object} hooks
     * @property {Hook} hooks.content
     * @property {Hook} hooks.display
     * @property {Hook} hooks.layout
     * @property {Hook} hooks.render
     * @property {Hook} hooks.show
     * @property {Hook} hooks.unloaded
     * @memberof Rendition
     */
    hooks: {
        content: Hook;
        display: Hook;
        layout: Hook;
        render: Hook;
        show: Hook;
        unloaded: Hook;
    };
    /**
     * @member {Annotations} annotations
     * @memberof Rendition
     * @readonly
     */
    readonly annotations: Annotations;
    /**
     * @member {Themes} themes
     * @memberof Rendition
     * @readonly
     */
    readonly themes: Themes;
    /**
     * @member {EpubCFI} epubcfi
     * @memberof Rendition
     * @readonly
     */
    readonly epubcfi: EpubCFI;
    /**
     * A Rendered Location Range
     * @type {object}
     * @property {object} start
     * @property {string} start.index
     * @property {string} start.href
     * @property {object} start.displayed
     * @property {number} start.displayed.page
     * @property {number} start.displayed.total
     * @property {string} start.cfi EpubCFI string format
     * @property {number} start.location
     * @property {number} start.percentage
     * @property {object} end
     * @property {string} end.index
     * @property {string} end.href
     * @property {object} end.displayed
     * @property {number} end.displayed.page
     * @property {number} end.displayed.total
     * @property {string} end.cfi EpubCFI string format
     * @property {number} end.location
     * @property {number} end.percentage
     * @property {boolean} atStart Location at start position
     * @property {boolean} atEnd Location at end position
     * @memberof Rendition
     */
    location: object;
    starting: Defer;
    /**
     * returns after the rendition has started
     * @member {Promise<any>} started
     * @memberof Rendition
     */
    started: Promise<any>;
    q: Queue;
    /**
     * Require the manager from passed string, or as a class function
     * @param {string|function} manager
     * @return {any} manager
     * @private
     */
    private requireManager;
    /**
     * Start the rendering
     * @private
     */
    private start;
    /**
     * @member {Layout} layout
     * @memberof Rendition
     * @readonly
     */
    readonly layout: Layout | undefined;
    /**
     * @member {Viewport} viewport
     * @memberof Rendition
     * @readonly
     */
    readonly viewport: Viewport | undefined;
    manager: any;
    /**
     * Attach to viewport container
     * @param {Element|string} element viewport element
     * @return {Promise<any>}
     * @description
     * Call to attach the container to an element in the dom.
     * Container must be attached before rendering can begin.
     */
    attachTo(element: Element | string): Promise<any>;
    /**
     * Display a point in the book
     * @param {string|number} [target] `Section.index` OR `Section.idref` OR `Section.href` OR EpubCFI
     * @example rendition.display()
     * @example rendition.display(3)
     * @example rendition.display("#chapter_001")
     * @example rendition.display("chapter_001.xhtml")
     * @example rendition.display("epubcfi(/6/8!/4/2/16/1:0)")
     * @return {Promise<Section>}
     * @description
     * The request will be added to the rendering Queue, so it will wait until
     * book is opened, rendering started and all other rendering tasks have
     * finished to be called.
     */
    display(target?: string | number): Promise<Section>;
    /**
     * Tells the manager what to display immediately
     * @param {string|number} [target]
     * @return {Promise<Section>}
     * @private
     */
    private _display;
    /**
     * Report what section has been displayed
     * @param {object} view
     * @private
     */
    private afterDisplayed;
    /**
     * Report what has been removed
     * @param {object} view
     * @private
     */
    private afterRemoved;
    /**
     * Report resize events and display the last seen location
     * @param {object} view
     * @private
     */
    private onResized;
    /**
     * Move the Rendition to a specific offset
     * Usually you would be better off calling display()
     * @param {object} offset
     */
    moveTo(offset: object): void;
    /**
     * Resize viewport container
     * @param {number|string} [width]
     * @param {number|string} [height]
     * @returns {{ width: number, height: number }}
     * @example rendition.resize(800, 600)
     * @example rendition.resize("90%", 600)
     */
    resize(width?: number | string, height?: number | string): {
        width: number;
        height: number;
    };
    /**
     * Clear all rendered views
     */
    clear(): void;
    /**
     * Go to the next "page" in the rendition
     * @return {Promise<any>}
     */
    next(): Promise<any>;
    /**
     * Go to the previous "page" in the rendition
     * @return {Promise<any>}
     */
    prev(): Promise<any>;
    /**
     * Determine the Layout properties from metadata and settings
     * @link http://www.idpf.org/epub/301/spec/epub-publications.html#meta-properties-rendering
     * @return {object} Layout properties
     * @private
     */
    private determineLayoutProperties;
    /**
     * Layout configuration
     * @param {object} options
     */
    updateLayout(options: object): void;
    /**
     * Get the Current Location object
     * @return {object|Promise<object>} location (may be a promise)
     */
    currentLocation(): object | Promise<object>;
    /**
     * Creates a Rendition#locationRange from location passed by the Manager
     * @param {object[]} target Location sections
     * @returns {object}
     * @private
     */
    private located;
    /**
     * relocated event handler
     * @fires relocated
     * @param {object[]} loc
     * @private
     */
    private relocated;
    /**
     * Pass the events from a view's Contents
     * @param {Contents} view contents
     * @private
     */
    private passEvents;
    /**
     * Emit events passed by a view
     * @param {event} e
     * @private
     */
    private triggerViewEvent;
    /**
     * Emit a selection event's CFI Range passed from a a view
     * @param {string} cfirange
     * @private
     */
    private triggerSelectedEvent;
    /**
     * Emit a markClicked event with the cfiRange and data from a mark
     * @param {EpubCFI} cfirange
     * @param {object} data
     * @param {Contents} contents
     * @private
     */
    private triggerMarkEvent;
    /**
     * Get a Range from a Visible CFI
     * @param {string} epubcfi EpubCfi string
     * @param {string} ignoreClass
     * @return {Range}
     */
    getRange(epubcfi: string, ignoreClass: string): Range;
    /**
     * Hook to adjust images to fit in columns
     * @param {Contents} contents
     * @returns {Promise<Node|null>}
     * @private
     */
    private adjustImages;
    /**
     * Get the Contents object of each rendered view
     * @returns {Array<Contents>}
     */
    getContents(): Array<Contents>;
    /**
     * Get the views member from the manager
     * @returns {Views}
     */
    views(): Views;
    /**
     * Hook to handle link clicks in rendered content
     * @param {Contents} contents
     * @private
     */
    private handleLinks;
    /**
     * Hook to handle injecting stylesheet before
     * a Section is serialized
     * @param {Document} doc
     * @param {Section} section
     * @private
     */
    private injectStylesheet;
    /**
     * Hook to handle injecting scripts before
     * a Section is serialized
     * @param {Document} doc
     * @param {Section} section
     * @private
     */
    private injectScript;
    /**
     * Hook to handle the document identifier before a Section is serialized
     * @param {Document} doc
     * @param {Section} section
     * @private
     */
    private injectIdentifier;
    /**
     * Remove and Clean Up the Rendition
     */
    destroy(): void;
}
import Book from "./book";
import Hook from "./utils/hook";
import Annotations from "./annotations";
import Themes from "./themes";
import EpubCFI from "./epubcfi";
import Defer from "./utils/defer";
import Queue from "./utils/queue";
import Layout from "./layout";
import Viewport from "./viewport";
import Section from "./section";
import Contents from "./contents";
import Views from "./managers/helpers/views";
