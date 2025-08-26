export default RangeObject;
/**
 * Lightweight Polyfill for DOM Range
 */
declare class RangeObject {
    collapsed: boolean;
    commonAncestorContainer: any;
    endContainer: any;
    endOffset: any;
    startContainer: any;
    startOffset: any;
    /**
     * Set start
     * @param {Node} startNode
     * @param {Node} startOffset
     */
    setStart(startNode: Node, startOffset: Node): void;
    /**
     * Set end
     * @param {Node} endNode
     * @param {Node} endOffset
     */
    setEnd(endNode: Node, endOffset: Node): void;
    /**
     * collapse
     * @param {boolean} toStart
     */
    collapse(toStart: boolean): void;
    /**
     * Select Node
     * @param {Node} referenceNode
     */
    selectNode(referenceNode: Node): void;
    /**
     * Select Node Contents
     * @param {Node} referenceNode
     */
    selectNodeContents(referenceNode: Node): void;
    _commonAncestorContainer(startContainer: any, endContainer: any): Node | undefined;
    _checkCollapsed(): void;
    toString(): void;
}
