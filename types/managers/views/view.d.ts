export default View;
/**
 * The View base class
 */
declare class View {
    /**
     * Constructor
     * @param {Layout} layout
     * @param {Section} section
     */
    constructor(layout: Layout, section: Section);
    /**
     * @member {string} id
     * @memberof View
     * @readonly
     */
    readonly id: string;
    /**
     * @member {Contents} contents
     * @memberof View
     * @readonly
     */
    readonly contents: any;
    /**
     * @member {Element} container
     * @memberof View
     * @readonly
     */
    readonly container: HTMLDivElement | null | undefined;
    /**
     * @member {boolean} displayed
     * @memberof View
     * @readonly
     */
    readonly displayed: boolean;
    /**
     * @member {Document} document
     * @memberof View
     * @readonly
     */
    readonly document: any;
    /**
     * @member {boolean} expanding
     * @memberof View
     * @readonly
     */
    readonly expanding: boolean;
    /**
     * @member {Node}
     * @memberof View
     * @readonly
     */
    readonly frame: any;
    /**
     * @member {Marks} marks
     * @memberof View
     * @readonly
     */
    readonly marks: Marks | null | undefined;
    /**
     * @member {number} width
     * @memberof View
     * @readonly
     */
    readonly width: number;
    /**
     * @member {number} height
     * @memberof View
     * @readonly
     */
    readonly height: number;
    layout: Layout;
    section: Section;
    /**
     * @member {object} settings
     * @memberof View
     * @readonly
     */
    readonly settings: any;
    /**
     * Create the view-container
     * @private
     */
    private init;
    /**
     * Clear all marks
     * @returns {number} number of marks
     * @abstract
     */
    clear(): number;
    /**
     * Create frame element
     * @returns {Element} iframe
     * @abstract
     */
    create(): Element;
    /**
     * render
     * @param {function} request
     * @returns {Promise<string>} section render
     * @abstract
     */
    render(request: Function): Promise<string>;
    /**
     * Reset frame
     * @abstract
     */
    reset(): void;
    /**
     * Update view
     * @abstract
     */
    update(): void;
    /**
     * Update axis
     * @abstract
     */
    axis(): void;
    /**
     * Update mode
     * @param {string} value
     * @abstract
     */
    mode(value: string): void;
    /**
     * Expanding
     * @abstract
     */
    expand(): void;
    /**
     * reframe
     * @param {number} width
     * @param {number} height
     * @abstract
     */
    reframe(width: number, height: number): void;
    /**
     * Load frame
     * @param {string} contents
     * @returns {Promise<any>} loading promise
     * @abstract
     */
    load(contents: string): Promise<any>;
    /**
     * Display view
     * @param {function} request
     * @returns {Promise<View>} displayed promise
     */
    display(request: Function): Promise<View>;
    /**
     * Show container
     */
    show(): void;
    /**
     * Hide container
     * @abstract
     */
    hide(): void;
    /**
     * offset
     * @returns {{ top: number, left: number }}
     */
    offset(): {
        top: number;
        left: number;
    };
    /**
     * position
     * @returns {DOMRect}
     */
    position(): DOMRect;
    /**
     * locationOf
     * @param {string|EpubCFI} target
     * @returns {{ top: number, left: number }}
     */
    locationOf(target: string | EpubCFI): {
        top: number;
        left: number;
    };
    /**
     * highlight
     * @param {string} cfiRange
     * @param {object} [data={}]
     * @param {function} [cb=null] callback function
     * @param {string} [className='epubjs-hl']
     * @param {object} [styles={}]
     * @returns {object}
     */
    highlight(cfiRange: string, data?: object, cb?: Function, className?: string, styles?: object): object;
    /**
     * unhighlight
     * @param {string} cfiRange
     * @returns {boolean}
     */
    unhighlight(cfiRange: string): boolean;
    /**
     * underline
     * @param {string} cfiRange
     * @param {object} [data={}]
     * @param {function} [cb=null]
     * @param {string} [className='epubjs-ul']
     * @param {object} [styles={}]
     * @returns {object}
     */
    underline(cfiRange: string, data?: object, cb?: Function, className?: string, styles?: object): object;
    /**
     * ununderline
     * @param {string} cfiRange
     * @returns {boolean}
     */
    ununderline(cfiRange: string): boolean;
    /**
     * Destroy the View object
     * @abstract
     */
    destroy(): void;
    size: any;
}
import Marks from "../../marks-pane/marks";
import Layout from "../../layout";
import Section from "../../section";
import EpubCFI from "../../epubcfi";
