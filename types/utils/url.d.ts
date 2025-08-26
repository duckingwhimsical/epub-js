export default Url;
/**
 * Creates a Url object for parsing and manipulation of a url string
 */
declare class Url {
    /**
     * Constructor
     * @param {string} url a url string (relative or absolute)
     * @param {string} [base] optional base for the url, default to window.location.href
     */
    constructor(url: string, base?: string);
    Url: URL | undefined;
    href: string;
    protocol: string;
    origin: string;
    hash: string;
    search: string;
    base: string | undefined;
    /**
     * @member {Path} path
     * @memberof Url
     * @readonly
     */
    readonly path: Path;
    directory: string;
    filename: any;
    extension: any;
    /**
     * Resolves a relative path to a absolute url
     * @param {string} path
     * @returns {string} url
     */
    resolve(path: string): string;
    /**
     * Resolve a path relative to the url
     * @param {string} path
     * @returns {string} path
     */
    relative(path: string): string;
    /**
     * toString
     * @returns {string}
     */
    toString(): string;
}
import Path from "./path";
