export default InlineView;
/**
 * InlineView class
 * @extends {View}
 */
declare class InlineView extends View {
    /**
     * Constructor
     * @param {Layout} layout
     * @param {Section} section
     * @param {object} [options]
     * @param {string} [options.ignoreClass='']
     * @param {number} [options.width]
     * @param {number} [options.height]
     */
    constructor(layout: Layout, section: Section, options?: {
        ignoreClass?: string | undefined;
        width?: number | undefined;
        height?: number | undefined;
    });
    settings: object;
}
import View from "./view";
import Layout from "../../layout";
import Section from "../../section";
