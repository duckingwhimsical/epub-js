export default ContinuousViewManager;
/**
 * Continuous view manager
 * @extends {DefaultViewManager}
 */
declare class ContinuousViewManager extends DefaultViewManager {
    /**
     * Constructor
     * @param {Book} book
     * @param {object} [options]
     * @param {string} [options.axis]
     * @param {object} [options.snap]
     * @param {string} [options.method] values: `"blobUrl"` OR `"srcdoc"` OR `"write"`
     * @param {string} [options.ignoreClass='']
     * @param {string|object} [options.view='iframe']
     * @param {string[]} [options.sandbox=[]] iframe sandbox policy list
     */
    constructor(book: Book, options?: {
        axis?: string | undefined;
        snap?: object | undefined;
        method?: string | undefined;
        ignoreClass?: string | undefined;
        view?: string | object | undefined;
        sandbox?: string[] | undefined;
    });
    /**
     * render
     * @param {Element|string} element viewport element
     * @param {object} size
     * @override
     */
    override render(element: Element | string, size: object): void;
    snapper: Snap | undefined;
    /**
     * fill
     * @param {Defer} value
     * @returns {Promise<any>}
     */
    fill(value: Defer): Promise<any>;
    /**
     * moveTo
     * @param {object} offset
     * @override
     */
    override moveTo(offset: object): void;
    /**
     * Remove Previous Listeners if present
     * @param {*} view
     */
    removeShownListeners(view: any): void;
    /**
     * update
     * @param {number} [offset]
     * @returns {Promise<any>}
     */
    update(offset?: number): Promise<any>;
    /**
     * check
     * @param {number} [offsetLeft]
     * @param {number} [offsetTop]
     * @returns {Promise<any>}
     * @private
     */
    private check;
    /**
     * next
     * @returns {Promise<any>}
     * @override
     */
    override next(): Promise<any>;
    /**
     * prev
     * @returns {Promise<any>}
     * @override
     */
    override prev(): Promise<any>;
}
import DefaultViewManager from "../default";
import Snap from "../helpers/snap";
import Defer from "../../utils/defer";
import Book from "../../book";
