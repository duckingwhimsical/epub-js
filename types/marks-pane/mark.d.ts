export default Mark;
/**
 * Mark class
 */
declare class Mark {
    /**
     * @member {Node} element the mark container to rects
     * @memberof Mark
     * @readonly
     */
    readonly element: Node | null;
    range: any;
    /**
     * bind
     * @param {Node} element the mark container to rects
     * @param {Node} container the epub-view container
     */
    bind(element: Node, container: Node): void;
    container: Node | undefined;
    /**
     * unbind
     * @returns {Node}
     */
    unbind(): Node;
    /**
     * Clear the mark container
     */
    clear(): void;
    /**
     * render
     * @abstract
     */
    render(): void;
    /**
     * Dispatch event
     * @param {MouseEvent} e
     */
    dispatchEvent(e: MouseEvent): void;
    /**
     * Get bounding client rect
     * @returns {DOMRect}
     */
    getBoundingClientRect(): DOMRect;
    /**
     * Get client rects
     * @returns {object[]}
     */
    getClientRects(): object[];
}
