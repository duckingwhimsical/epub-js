export default Snap;
/**
 * Snap
 */
declare class Snap {
    /**
     * Constructor
     * @param {*} manager
     * @param {object} [options]
     * @param {number} [options.duration=300]
     * @param {number} [options.minVelocity=0.2]
     * @param {number} [options.minDistance=10]
     */
    constructor(manager: any, options?: {
        duration?: number | undefined;
        minVelocity?: number | undefined;
        minDistance?: number | undefined;
    });
    settings: object;
    /**
     * setup
     * @param {*} manager
     */
    setup(manager: any): void;
    manager: any;
    layout: any;
    element: any;
    scroller: any;
    isVertical: boolean | undefined;
    touchCanceler: boolean | undefined;
    resizeCanceler: boolean | undefined;
    snapping: boolean | undefined;
    startTouchX: any;
    startTouchY: any;
    startTime: number | undefined;
    endTouchX: any;
    endTouchY: any;
    endTime: number | undefined;
    /**
     * supportsTouch
     * @returns {boolean}
     */
    supportsTouch(): boolean;
    /**
     * disableScroll
     * @private
     */
    private disableScroll;
    /**
     * enableScroll
     * @private
     */
    private enableScroll;
    /**
     * addListeners
     * @private
     */
    private addListeners;
    /**
     * removeListeners
     * @private
     */
    private removeListeners;
    /**
     * afterDisplayed
     * @param {*} view
     * @private
     */
    private afterDisplayed;
    /**
     * triggerViewEvent
     * @param {Event} e
     * @param {Contents} contents
     * @private
     */
    private triggerViewEvent;
    /**
     * onScroll
     * @param {Event} e
     * @private
     */
    private onScroll;
    scrollLeft: any;
    scrollTop: any;
    /**
     * onResize
     * @param {Event} e
     * @private
     */
    private onResize;
    /**
     * onTouchStart
     * @param {Event} e
     * @private
     */
    private onTouchStart;
    /**
     * onTouchMove
     * @param {Event} e
     * @private
     */
    private onTouchMove;
    /**
     * onTouchEnd
     * @param {Event} e
     * @private
     */
    private onTouchEnd;
    /**
     * wasSwiped
     * @returns {number}
     */
    wasSwiped(): number;
    /**
     * needsSnap
     * @returns {boolean}
     */
    needsSnap(): boolean;
    /**
     * snap
     * @param {number} [howMany=0]
     * @returns {Promise}
     */
    snap(howMany?: number): Promise<any>;
    /**
     * smoothScrollTo
     * @param {number} destination
     * @returns {Promise}
     */
    smoothScrollTo(destination: number): Promise<any>;
    /**
     * scrollTo
     * @param {number} [left=0]
     * @param {number} [top=0]
     */
    scrollTo(left?: number, top?: number): void;
    /**
     * destroy
     * @returns {void}
     */
    destroy(): void;
}
