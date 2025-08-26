export default Viewport;
/**
 * viewport configuration class
 */
declare class Viewport {
    /**
     * Constructor
     * @param {Layout} layout
     */
    constructor(layout: Layout);
    layout: Layout;
    /**
     * viewport container
     * @member {Element} container
     * @memberof Viewport
     * @readonly
     */
    readonly container: Element | null | undefined;
    /**
     * viewport element
     * @member {Element} target
     * @memberof Viewport
     * @readonly
     */
    readonly target: Element | null | undefined;
    /**
     * viewport rect
     * @member {object} rect
     * @memberof Viewport
     * @readonly
     */
    readonly rect: {
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
     * Attach to viewport element
     * @param {Element|string} input viewport element
     * @param {object} options
     * @param {string|number} options.width viewport container width
     * @param {string|number} options.height viewport container height
     * @param {object} options.views
     * @returns {Element|null} attached element
     */
    attachTo(input: Element | string, options: {
        width: string | number;
        height: string | number;
        views: object;
    }): Element | null;
    views: object | undefined;
    /**
     * Create viewport-container
     * @param {object} options
     * @param {string|number} [options.width]
     * @param {string|number} [options.height]
     * @returns {Element} container
     * @private
     */
    private create;
    /**
     * appendListeners
     * @private
     */
    private appendListeners;
    resizeFunc: ResizeObserver | undefined;
    /**
     * removeListeners
     * @private
     */
    private removeListeners;
    /**
     * Get viewport element
     * @param {Element|string} input
     * @returns {Element}
     * @private
     */
    private getElement;
    /**
     * orientationchanged
     * @param {Event} e
     * @private
     */
    private orientation;
    /**
     * resized event handler
     * @param {object} entries
     * @private
     */
    private resized;
    /**
     * size
     * @param {string|number} [width]
     * @param {string|number} [height]
     * @returns {object}
     */
    size(width?: string | number, height?: string | number): object;
    /**
     * Update direction
     * @param {string} [value] `layout.direction` value
     * @private
     */
    private direction;
    /**
     * Update axis
     * @param {string} [value] values: `"horizontal"` OR `"vertical"`
     * @private
     */
    private updateAxis;
    /**
     * Update flow
     * @param {string} [value] `layout.flow` value
     * @private
     */
    private updateFlow;
    /**
     * Update viewport container
     */
    update(): void;
    /**
     * destroy
     */
    destroy(): void;
}
import Layout from "./layout";
