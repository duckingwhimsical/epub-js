export default Path;
/**
 * Creates a Path object for parsing and manipulation of a path strings
 * @link https://nodejs.org/api/path.html
 */
declare class Path {
    /**
     * Constructor
     * @param {string} uri a url string (relative or absolute)
     */
    constructor(uri: string);
    /**
     * @member {string} directory
     * @memberof Path
     * @readonly
     */
    readonly directory: string;
    /**
     * @member {string} filename
     * @memberof Path
     * @readonly
     */
    readonly filename: any;
    /**
     * @member {string} extension
     * @memberof Path
     * @readonly
     */
    readonly extension: any;
    /**
     * @member {string} path
     * @memberof Path
     * @readonly
     */
    readonly path: string;
    /**
     * Parse the path
     * @link https://nodejs.org/api/path.html#path_path_parse_path
     * @param {string} path
     * @returns {object}
     */
    parse(path: string): object;
    /**
     * dirname
     * @link https://nodejs.org/api/path.html#pathdirnamepath
     * @param {string} path
     * @returns {string}
     */
    dirname(path: string): string;
    /**
     * isAbsolute
     * @link https://nodejs.org/api/path.html#pathisabsolutepath
     * @param {string} path
     * @returns {boolean}
     */
    isAbsolute(path: string): boolean;
    /**
     * Check if path ends with a directory
     * @param {string} path
     * @returns {boolean}
     */
    isDirectory(path: string): boolean;
    /**
     * Resolve path
     * @link https://nodejs.org/api/path.html#pathresolvepaths
     * @returns {string} resolved
     */
    resolve(...args: any[]): string;
    /**
     * Relative path resolve
     * @link https://nodejs.org/api/path.html#pathrelativefrom-to
     * @param {string} from
     * @param {string} to
     * @returns {string} relative path
     */
    relative(from: string, to: string): string;
    /**
     * Normalize path
     * @link https://nodejs.org/api/path.html#pathnormalizepath
     * @param {string} path
     * @returns {string}
     */
    normalize(path: string): string;
    /**
     * Return the path string
     * @returns {string} path
     */
    toString(): string;
    normalizeArray(parts: any, allowAboveRoot: any): any[];
    splitPath(filename: any): string[];
    trimArray(arr: any): any;
}
