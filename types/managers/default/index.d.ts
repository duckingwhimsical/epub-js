export default DefaultViewManager;
/**
 * Default View Manager
 */
declare class DefaultViewManager {
    /**
     * Constructor
     * @param {Book} book
     * @param {object} [options]
     * @param {string} [options.method] values: `"blobUrl"` OR `"srcdoc"` OR `"write"`
     * @param {string} [options.ignoreClass='']
     * @param {string|object} [options.view='iframe']
     * @param {string[]} [options.sandbox=[]] iframe sandbox policy list
     */
    constructor(book: Book, options?: {
        method?: string | undefined;
        ignoreClass?: string | undefined;
        view?: string | object | undefined;
        sandbox?: string[] | undefined;
    });
    /**
     * @member {string} name Manager name
     * @memberof DefaultViewManager
     * @readonly
     */
    readonly name: string;
    load: (path: string, type?: string) => Promise<any>;
    layout: import("../..").Layout | undefined;
    paginated: boolean;
    settings: object;
    /**
     * @member {object[]} location
     * @memberof DefaultViewManager
     * @readonly
     */
    readonly location: any[];
    /**
     * @member {Mapping} mapping
     * @memberof DefaultViewManager
     * @readonly
     */
    readonly mapping: Mapping;
    /**
     * @member {boolean} rendered
     * @memberof DefaultViewManager
     * @readonly
     */
    readonly rendered: boolean;
    scrollType: string | null | undefined;
    /**
     * @member {Views} views
     * @memberof DefaultViewManager
     * @readonly
     */
    readonly views: Views;
    viewport: import("../../viewport").default | undefined;
    /**
     * @member {string} writingMode
     * @memberof DefaultViewManager
     * @readonly
     */
    readonly writingMode: string | null | undefined;
    q: Queue;
    /**
     * render
     * @param {Element|string} element viewport element
     * @param {object} size
     * @param {string|number} size.width
     * @param {string|number} size.height
     */
    render(element: Element | string, size: {
        width: string | number;
        height: string | number;
    }): void;
    /**
     * display
     * @param {Section} section
     * @param {string|number} [target]
     * @returns {Promise<View|null>} displaying promise
     */
    display(section: Section, target?: string | number): Promise<View | null>;
    /**
     * appendEventListeners
     * @private
     */
    private appendEventListeners;
    scrollend: any;
    /**
     * removeEventListeners
     * @private
     */
    private removeEventListeners;
    /**
     * Require the view from passed string, or as a class function
     * @param {string|function} view
     * @return {function}
     * @private
     */
    private requireView;
    /**
     * createView
     * @param {Section} section
     * @returns {object} View (default: IframeView)
     * @private
     */
    private createView;
    /**
     * the view displayed event handler
     * @param {object} view
     * @private
     */
    private displayed;
    /**
     * the view resized event handler
     * @param {object} view
     * @private
     */
    private resized;
    /**
     * moveTo
     * @param {object} offset
     * @param {number} offset.top
     * @param {number} offset.left
     * @param {number} width
     */
    moveTo(offset: {
        top: number;
        left: number;
    }, width: number): void;
    /**
     * append
     * @param {Section} section Section object
     * @returns {Promise<any>}
     * @private
     */
    private append;
    /**
     * prepend
     * @param {Section} section
     * @returns {Promise<any>}
     * @private
     */
    private prepend;
    /**
     * counter
     * @param {object} view
     * @private
     */
    private counter;
    /**
     * next
     * @returns {Promise<View|null>} next view
     */
    next(): Promise<View | null>;
    scrollLeft: number | undefined;
    /**
     * prev
     * @returns {Promise<View|null>}
     */
    prev(): Promise<View | null>;
    /**
     * Get current visible view
     * @returns {View|null} view
     */
    current(): View | null;
    /**
     * clear views
     */
    clear(): void;
    /**
     * relocated
     * @private
     */
    private relocated;
    /**
     * currentLocation
     * @returns {object[]} Location sections
     */
    currentLocation(): object[];
    /**
     * Get location from scrolled flow
     * @returns {object[]} Location sections
     * @private
     */
    private scrolledLocation;
    /**
     * Get location from paginated flow
     * @returns {object[]} sections
     * @private
     */
    private paginatedLocation;
    /**
     * isVisible
     * @param {any} view
     * @param {number} offsetPrev
     * @param {number} offsetNext
     * @returns {boolean}
     * @private
     */
    private isVisible;
    /**
     * Get array of visible views
     * @returns {object[]} array of visible views
     */
    visible(): object[];
    /**
     * scrollBy
     * @param {number} x
     * @param {number} y
     * @param {boolean} silent
     * @private
     */
    private scrollBy;
    ignore: boolean | undefined;
    /**
     * scrollTo
     * @param {number} x
     * @param {number} y
     * @param {boolean} silent
     * @private
     */
    private scrollTo;
    /**
     * scrolled
     * @param {Event} e
     */
    scrolled(e: Event): void;
    /**
     * onscroll
     * @param {Event} e
     * @private
     */
    private onscroll;
    /**
     * onscrollend
     * @param {Event} e
     * @private
     */
    private onscrollend;
    /**
     * calculate
     * @private
     */
    private calculate;
    /**
     * Update writing mode
     * @param {string} mode
     * @private
     */
    private updateWritingMode;
    /**
     * Get contents array from views
     * @returns {Array<Contents>} [view.contents]
     */
    getContents(): Array<Contents>;
    /**
     * isRendered
     * @returns {boolean}
     */
    isRendered(): boolean;
    /**
     * Destroy the DefaultViewManager object
     */
    destroy(): void;
}
import Mapping from "../../mapping";
import Views from "../helpers/views";
import Queue from "../../utils/queue";
import Section from "../../section";
import View from "../views/view";
import Contents from "../../contents";
import Book from "../../book";
