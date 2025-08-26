export default Themes;
/**
 * Themes to apply to displayed content
 */
declare class Themes extends Map<any, any> {
    /**
     * Constructor
     * @param {Rendition} rendition
     */
    constructor(rendition: Rendition);
    rendition: Rendition;
    /**
     * @member {string} current
     * @memberof Themes
     * @readonly
     */
    readonly current: any;
    /**
     * Injected css rules
     * @member {object} rules
     * @memberof Themes
     * @readonly
     */
    readonly rules: {};
    /**
     * Add themes to be used by a rendition
     * @param {IArguments} args
     * @example register("light", "/path/to/light.css")
     * @example register("light", "https://example.com/to/light.css")
     * @example register("light", { body: { color: "purple"}})
     * @example register({ light: {...}, dark: {...}})
     */
    register(...args: any[]): void;
    /**
     * Register themes object
     * @param {object} themes
     */
    registerThemes(themes: object): void;
    /**
     * Register a url
     * @param {string} name Theme name
     * @param {string} input URL string
     * @example registerUrl("light", "light.css")
     * @example registerUrl("light", "http://example.com/light.css")
     */
    registerUrl(name: string, input: string): void;
    /**
     * Register rule
     * @param {string} name
     * @param {object} rules
     * @example registerRules("light", { body: { color: "purple"}})
     */
    registerRules(name: string, rules: object): void;
    /**
     * Select a theme
     * @param {string} [name] Theme name
     * @description Use null to reject the current selected theme
     */
    select(name?: string): void;
    /**
     * Append theme to contents
     * @param {string} key
     * @param {object} theme
     * @param {Contents} contents
     * @private
     */
    private append;
    /**
     * Remove theme from contents
     * @param {string} key
     * @param {object} theme
     * @param {Contents} contents
     * @private
     */
    private remove;
    /**
     * Inject all themes into contents
     * @param {Contents} contents
     * @private
     */
    private inject;
    /**
     * Update all themes into contents
     * @param {Contents} contents
     * @private
     */
    private update;
    /**
     * Append rule
     * @param {string} name
     * @param {string} value
     * @param {boolean} [priority=false]
     */
    appendRule(name: string, value: string, priority?: boolean): void;
    /**
     * Remove rule
     * @param {string} name
     */
    removeRule(name: string): void;
    /**
     * Remove all rules
     */
    removeRules(): void;
    /**
     * Adjust the font size of a rendition
     * @param {string} size
     */
    fontSize(size: string): void;
    /**
     * Adjust the font-family of a rendition
     * @param {string} f
     */
    font(f: string): void;
    /**
     * destroy
     */
    destroy(): void;
}
import Rendition from "./rendition";
