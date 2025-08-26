export default Sections;
/**
 * Sections class
 * @extends {Map}
 */
declare class Sections extends Map<any, any> {
    constructor();
    /**
     * @member {object} hooks
     * @property {Hook} content
     * @property {Hook} serialize
     * @memberof Sections
     * @readonly
     */
    readonly hooks: {
        content: Hook;
        serialize: Hook;
    };
    points: {};
    nav: Navigation | undefined;
    pkg: Packaging | undefined;
    /**
     * Get an item from the spine
     * @param {string|number} [target]
     * @return {Section|null} section
     * @example sections.get();
     * @example sections.get(3);
     * @example sections.get("#chapter_001");
     * @example sections.get("chapter_001.xhtml");
     * @example sections.get("epubcfi(/6/8!/4/2/16/1:0)")
     * @override
     */
    override get(target?: string | number): Section | null;
    /**
     * Find the first Section in the Spine
     * @return {Section|null} first section
     */
    first(): Section | null;
    /**
     * Find the last Section in the Spine
     * @return {Section|null} last section
     */
    last(): Section | null;
    /**
     * Unpack items from a opf into spine items
     * @param {Packaging} packaging
     * @param {Navigation} navigation
     * @param {Function} resolve URL resolve
     * @param {Function} canonical Resolve canonical url
     * @returns {Promise<Sections>}
     */
    unpack(packaging: Packaging, navigation: Navigation, resolve: Function, canonical: Function): Promise<Sections>;
    /**
     * destroy
     */
    destroy(): void;
}
import Hook from "./utils/hook";
import Navigation from "./navigation";
import Packaging from "./packaging";
import Section from "./section";
