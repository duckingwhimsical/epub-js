export default ePub;
/**
 * Create a new Book instance
 * @param {string|ArrayBuffer} input URL, Path or ArrayBuffer
 * @param {object} [options] to pass to the book
 * @returns {Book} a new Book object
 * @example ePub()
 * @example ePub("/path/to/book/")
 * @example ePub("/path/to/book/", { replacements: "blobUrl", store: "epub-js" })
 * @example ePub("/path/to/book.epub")
 * @example ePub("https://example.com/to/book.epub")
 */
declare function ePub(input: string | ArrayBuffer, options?: object): Book;
declare namespace ePub {
    export { EPUBJS_VERSION as VERSION };
    export { Book };
    export { Rendition };
    export { Contents };
    export { EpubCFI };
    export function manager(t: any): typeof DefaultViewManager | typeof ContinuousViewManager;
    export function view(t: any): typeof IframeView | typeof InlineView;
    export { utils };
}
import Book from "./book";
import { EPUBJS_VERSION } from "./utils/constants";
import Rendition from "./rendition";
import Contents from "./contents";
import EpubCFI from "./epubcfi";
import DefaultViewManager from "./managers/default";
import ContinuousViewManager from "./managers/continuous";
import IframeView from "./managers/views/iframe";
import InlineView from "./managers/views/inline";
import * as utils from "./utils/core";
