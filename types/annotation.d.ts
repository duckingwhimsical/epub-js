export default Annotation;
/**
 * Annotation class
 */
declare class Annotation {
    /**
     * Constructor
     * @param {string} type Type of annotation to add: `"highlight"` OR `"underline"`
     * @param {string} cfiRange EpubCFI range to attach annotation to
     * @param {object} [options]
     * @param {object} [options.data] Data to assign to annotation
     * @param {Function} [options.cb] Callback after annotation is clicked
     * @param {string} [options.className] CSS class to assign to annotation
     * @param {object} [options.styles] CSS styles to assign to annotation
     */
    constructor(type: string, cfiRange: string, { data, cb, className, styles }?: {
        data?: object | undefined;
        cb?: Function | undefined;
        className?: string | undefined;
        styles?: object | undefined;
    });
    /**
     * @member {string} type
     * @memberof Annotation
     * @readonly
     */
    readonly type: string;
    cfiRange: string;
    /**
     * @member {number} sectionIndex
     * @memberof Annotation
     * @readonly
     */
    readonly sectionIndex: number;
    data: object | undefined;
    cb: Function | undefined;
    className: string | undefined;
    styles: object | undefined;
    /**
     * @member {Mark} mark
     * @memberof Annotation
     * @readonly
     */
    readonly mark: object | undefined;
    /**
     * Update stored data
     * @param {object} data
     */
    update(data: object): void;
    /**
     * Add to a view
     * @param {View} view
     * @returns {object|null}
     */
    attach(view: View): object | null;
    /**
     * Remove from a view
     * @param {View} view
     * @returns {boolean}
     */
    detach(view: View): boolean;
    /**
     * [Not Implemented] Get text of an annotation
     * @TODO: needs implementation in contents
     */
    text(): void;
}
import View from "./managers/views/view";
