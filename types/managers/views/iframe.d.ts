export default IframeView;
/**
 * IframeView class
 * @extends {View}
 */
declare class IframeView extends View {
    /**
     * Constructor
     * @param {Layout} layout ref
     * @param {Section} section ref
     * @param {object} [options]
     * @param {string} [options.ignoreClass='']
     * @param {string} [options.method='write'] values: `"blobUrl"` OR `"srcdoc"` OR `"write"`
     * @param {string[]} [options.sandbox=[]] iframe sandbox policy list
     */
    constructor(layout: Layout, section: Section, options?: {
        ignoreClass?: string | undefined;
        method?: string | undefined;
        sandbox?: string[] | undefined;
    });
    settings: object;
    blobUrl: string | null | undefined;
    /**
     * Load method
     * @member {string} method
     * @memberof IframeView
     * @readonly
     */
    readonly method: any;
    /**
     * @member {string} writingMode
     * @memberof IframeView
     * @readonly
     */
    readonly writingMode: string;
    /**
     * onLoad
     * @param {Event} event
     * @param {Defer} defer
     */
    onLoad(event: Event, defer: Defer): void;
}
import View from "./view";
import Defer from "../../utils/defer";
import Layout from "../../layout";
import Section from "../../section";
