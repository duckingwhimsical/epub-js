export default Book;
/**
 * An Epub representation with methods for the loading,
 * parsing and manipulation of its contents.
 */
declare class Book {
    /**
     * Constructor
     * @param {string|ArrayBuffer} [input] Url, Path or ArrayBuffer
     * @param {object} [options]
     * @param {string} [options.format='xml'] epub container format
     * @param {object} [options.request] object options to xhr request
     * @param {Function} [options.request.method] a request function to use instead of the default
     * @param {boolean} [options.request.withCredentials=false] send the xhr request withCredentials
     * @param {string[]} [options.request.headers=[]] send the xhr request headers
     * @param {string} [options.encoding='binary'] optional to pass `"binary"` or `"base64"` for archived Epubs
     * @param {string} [options.replacements=null] use `"base64"` or `"blobUrl"` for replacing assets
     * @param {Function} [options.canonical] optional function to determine canonical urls for a path
     * @param {string} [options.store=null] cache the contents in local storage, value should be the name of the reader
     * @example new Book()
     * @example new Book("/path/to/book/", { store: "epub-js" })
     * @example new Book({ replacements: "base64", store: "epub-js" })
     */
    constructor(input?: string | ArrayBuffer, options?: {
        format?: string | undefined;
        request?: {
            method?: Function | undefined;
            withCredentials?: boolean | undefined;
            headers?: string[] | undefined;
        } | undefined;
        encoding?: string | undefined;
        replacements?: string | undefined;
        canonical?: Function | undefined;
        store?: string | undefined;
    });
    settings: object;
    /**
     * @member {Function} request
     * @memberof Book
     * @readonly
     */
    readonly request: any;
    /**
     * @member {Archive} archive
     * @memberof Book
     * @private
     */
    private archive;
    /**
     * @member {Storage} storage
     * @memberof Book
     * @readonly
     */
    readonly storage: Storage;
    /**
     * @member {Rendition} rendition
     * @memberof Book
     * @readonly
     */
    readonly rendition: Rendition | undefined;
    /**
     * @member {Container} container
     * @memberof Book
     * @readonly
     */
    readonly container: Container;
    /**
     * @member {Packaging} packaging
     * @memberof Book
     * @readonly
     */
    readonly packaging: Packaging;
    /**
     * @member {Resources} resources
     * @memberof Book
     * @readonly
     */
    readonly resources: Resources;
    /**
     * @member {Sections} sections
     * @memberof Book
     * @readonly
     */
    readonly sections: Sections;
    /**
     * @member {Locations} locations
     * @memberof Book
     * @readonly
     */
    readonly locations: Locations;
    /**
     * @member {Navigation} navigation
     * @memberof Book
     * @readonly
     */
    readonly navigation: Navigation;
    /**
     * @member {Url} url
     * @memberof Book
     * @readonly
     */
    readonly url: Url | undefined;
    /**
     * Init Promises
     * @private
     */
    private init;
    /**
     * @member {boolean} archived
     * @memberof Book
     * @readonly
     */
    readonly archived: boolean | undefined;
    /**
     * @member {string} cover
     * @memberof Book
     * @readonly
     */
    readonly cover: string | null | undefined;
    /**
     * @member {Path} path
     * @memberof Book
     * @readonly
     */
    readonly path: Path | undefined;
    /**
     * @member {boolean} isOpen
     * @memberof Book
     * @readonly
     */
    readonly isOpen: boolean | undefined;
    opening: Defer | undefined;
    /**
     * @member {Promise<Book>} opened returns after the book is loaded
     * @memberof Book
     * @readonly
     */
    readonly opened: Promise<any> | undefined;
    loading: {
        packaging: Defer;
        resources: Defer;
        navigation: Defer;
        sections: Defer;
        cover: Defer;
    } | undefined;
    /**
     * Sequential loading of tasks
     * @member {object} loaded
     * @property {Promise<Packaging>} packaging
     * @property {Promise<Resources>} resources
     * @property {Promise<Navigation>} navigation
     * @property {Promise<Sections>} sections
     * @property {Promise<string>} cover
     * @memberof Book
     * @readonly
     */
    readonly loaded: {
        packaging: Promise<any>;
        resources: Promise<any>;
        navigation: Promise<any>;
        sections: Promise<any>;
        cover: Promise<any>;
    } | undefined;
    /**
     * Clear parts
     */
    clear(): void;
    /**
     * Open a epub or url
     * @param {string|ArrayBuffer} input Url, Path or ArrayBuffer
     * @param {string} [openAs] input type: `"binary"` OR `"base64"` OR `"epub"` OR `"json"` OR `"directory"`
     * @returns {Promise<Book>} of when the book has been loaded
     * @example book.open("/path/to/book/")
     * @example book.open("/path/to/book.epub")
     * @example book.open("https://example.com/book/")
     * @example book.open("https://example.com/book.epub")
     * @example book.open([arraybuffer], "binary")
     */
    open(input: string | ArrayBuffer, openAs?: string): Promise<Book>;
    /**
     * Open an archived epub
     * @param {string|ArrayBuffer} input
     * @param {string} [type] input type: `"base64"`
     * @returns {Promise<Book>}
     * @private
     */
    private openEpub;
    /**
     * Open the epub container
     * @param {string} url
     * @returns {Promise<string>}
     * @private
     */
    private openContainer;
    /**
     * Open the package.opf
     * @param {string} url
     * @returns {Promise<any>}
     * @private
     */
    private openPackaging;
    /**
     * Load a resource from the Book
     * @param {string} path path to the resource to load
     * @param {string} [type=null]
     * @returns {Promise<any>} returns a promise with the requested resource
     */
    load(path: string, type?: string): Promise<any>;
    /**
     * Resolve a path to it's absolute position in the Book
     * @param {string} path
     * @param {boolean} [absolute=false] force resolving the full URL
     * @returns {string} the resolved path string
     */
    resolve(path: string, absolute?: boolean): string;
    /**
     * Get a canonical link to a path
     * @param {string} path
     * @returns {string} the canonical path string
     */
    canonical(path: string): string;
    /**
     * Determine the type of they input passed to open
     * @param {string} input
     * @returns {string} values: `"binary"` OR `"directory"` OR `"epub"` OR `"opf"`
     * @private
     */
    private determineType;
    /**
     * Unpack the contents of the book packaging
     * @returns {Promise<Book>}
     * @private
     */
    private unpack;
    /**
     * Load navigation
     * @returns {Promise<Navigation>}
     * @private
     */
    private loadNavigation;
    /**
     * Gets a Section of the Book from the Spine
     * Alias for `book.sections.get`
     * @param {string|number} [target]
     * @returns {Section|null}
     * @example book.section()
     * @example book.section(3)
     * @example book.section("#chapter_001")
     * @example book.section("chapter_001.xhtml")
     * @example book.section("epubcfi(/6/8!/4/2/16/1:0)")
     */
    section(target?: string | number): Section | null;
    /**
     * Sugar to render a book to an element
     * @param {Element|string} element element or string to add a rendition to
     * @param {object} [options]
     * @returns {Rendition}
     */
    renderTo(element: Element | string, options?: object): Rendition;
    /**
     * Set if request should use withCredentials
     * @param {boolean} credentials
     */
    setRequestCredentials(credentials: boolean): void;
    /**
     * Set headers request should use
     * @param {string[]} headers
     */
    setRequestHeaders(headers: string[]): void;
    /**
     * Unarchive a zipped epub
     * @param {string|ArrayBuffer} input url string or arraybuffer data
     * @param {string} [encoding] input type: `"base64"`
     * @returns {Promise<any>}
     * @private
     */
    private unarchive;
    /**
     * Storage configure
     * @param {string|ArrayBuffer} input
     * @private
     */
    private store;
    /**
     * Get the cover url
     * @returns {Promise<string>} coverUrl
     */
    coverUrl(): Promise<string>;
    /**
     * Find a DOM Range for a given CFI Range
     * @param {EpubCFI} cfiRange a epub cfi range
     * @returns {Promise<Range>}
     */
    getRange(cfiRange: EpubCFI): Promise<Range>;
    /**
     * Generates the Book Key using the identifier in the manifest or other string provided
     * @param {string} [identifier] to use instead of metadata identifier
     * @returns {string} key
     */
    key(identifier?: string): string;
    /**
     * Destroy the Book and all associated objects
     */
    destroy(): void;
}
import Storage from "./storage";
import Rendition from "./rendition";
import Container from "./container";
import Packaging from "./packaging";
import Resources from "./resources";
import Sections from "./sections";
import Locations from "./locations";
import Navigation from "./navigation";
import Url from "./utils/url";
import Path from "./utils/path";
import Defer from "./utils/defer";
import Section from "./section";
import EpubCFI from "./epubcfi";
