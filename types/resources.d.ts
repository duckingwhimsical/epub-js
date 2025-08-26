export default Resources;
/**
 * Assets container for URL replacements
 * @extends {Map}
 */
declare class Resources extends Map<any, any> {
    /**
     * Constructor
     * @param {function} request
     * @param {function} resolve
     * @param {string} [replacements=null]
     */
    constructor(request: Function, resolve: Function, replacements?: string);
    archive: Archive | undefined;
    storage: Storage | undefined;
    request: Function;
    resolve: Function;
    replacements: string | null;
    /**
     * Create a url to a resource
     * @param {string} href
     * @param {string} [mimeType]
     * @return {Promise<string>} Promise resolves with url string
     */
    createUrl(href: string, mimeType?: string): Promise<string>;
    /**
     * Revoke URL for a resource item
     * @param {string} url
     * @returns {{result: number, blobUrl: string}}
     * Result:
     *
     * 0. no-replacements
     * 1. replacements
     * 2. success
     */
    revokeUrl(url: string): {
        result: number;
        blobUrl: string;
    };
    /**
     * Substitute urls in content, with replacements,
     * relative to a url if provided
     * @param {string} content
     * @param {Section} section
     */
    substitute(content: string, section: Section): void;
    /**
     * Unpack resources from manifest
     * @param {Manifest} manifest
     * @param {Archive} archive
     * @param {Storage} storage
     * @returns {Promise<Resources>}
     */
    unpack(manifest: Manifest, archive: Archive, storage: Storage): Promise<Resources>;
    /**
     * destroy
     */
    destroy(): void;
}
import Archive from "./archive";
import Section from "./section";
import Manifest from "./packaging/manifest";
