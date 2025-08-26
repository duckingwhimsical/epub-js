export default Annotations;
/**
 * Handles managing adding & removing Annotations
 */
declare class Annotations extends Map<any, any> {
    /**
     * Constructor
     * @param {Rendition} rendition
     */
    constructor(rendition: Rendition);
    rendition: Rendition;
    /**
     * Append an annotation to store
     * @param {string} type Type of annotation to append: `"highlight"` OR `"underline"`
     * @param {string} cfiRange EpubCFI range to attach annotation to
     * @param {object} [options]
     * @param {object} [options.data] Data to assign to annotation
     * @param {Function} [options.cb] Callback after annotation is added
     * @param {string} [options.className] CSS class to assign to annotation
     * @param {object} [options.styles] CSS styles to assign to annotation
     * @returns {Annotation} Annotation that was append
     */
    append(type: string, cfiRange: string, options?: {
        data?: object | undefined;
        cb?: Function | undefined;
        className?: string | undefined;
        styles?: object | undefined;
    }): Annotation;
    /**
     * Remove an annotation from store
     * @param {string} type Type of annotation to remove: `"highlight"` OR `"underline"`
     * @param {string} cfiRange EpubCFI range to attach annotation to
     */
    remove(type: string, cfiRange: string): void;
    /**
     * Hook for injecting annotation into a view
     * @param {View} view
     * @private
     */
    private inject;
    /**
     * Hook for removing annotation from a view
     * @param {View} view
     * @private
     */
    private reject;
    /**
     * [Not Implemented] Show annotations
     * @TODO: needs implementation in View
     */
    show(): void;
    /**
     * [Not Implemented] Hide annotations
     * @TODO: needs implementation in View
     */
    hide(): void;
}
import Rendition from "./rendition";
import Annotation from "./annotation";
