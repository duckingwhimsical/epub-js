export default Marks;
/**
 * Marks class
 */
declare class Marks extends Map<any, any> {
    /**
     * Constructor
     * @param {Node} target view
     * @param {Node} [container=document.body] epub-view container
     */
    constructor(target: Node, container?: Node);
    target: Node;
    /**
     * @member {Node} element the marks container
     * @memberof Marks
     * @readonly
     */
    readonly element: SVGSVGElement;
    container: Node;
    /**
     * Append mark
     * @param {string} key
     * @param {Mark} mark
     * @returns {Mark}
     */
    appendMark(key: string, mark: Mark): Mark;
    /**
     * Remove mark
     * @param {string} key
     * @returns {void}
     */
    removeMark(key: string): void;
    /**
     * render
     */
    render(): void;
    /**
     * Update style
     * @param {Node} el the marks container
     * @private
     */
    private updateStyle;
}
import Mark from "./mark";
