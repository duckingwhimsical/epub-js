export default Highlight;
/**
 * Highlight class
 * @extends Mark
 */
declare class Highlight extends Mark {
    /**
     * Constructor
     * @param {Range} range
     * @param {object} [options]
     * @param {string} [options.className]
     * @param {object} [options.data={}]
     * @param {object} [options.attributes={}]
     * @param {object[]} [options.listeners=[]]
     */
    constructor(range: Range, { className, data, attributes, listeners }?: {
        className?: string | undefined;
        data?: object | undefined;
        attributes?: object | undefined;
        listeners?: object[] | undefined;
    });
    range: Range;
    className: string | undefined;
    data: object;
    attributes: object;
    listeners: any;
}
import Mark from "./mark";
