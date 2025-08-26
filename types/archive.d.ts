export default Archive;
/**
 * Handles Unzipping a requesting files from an Epub Archive
 * @extends {Input}
 */
declare class Archive extends Input {
    /**
     * Create JSZip instance
     */
    createInstance(): void;
    /**
     * Open an archive
     * @param {string|ArrayBuffer} input
     * @param {string} [encoding] tells JSZip if the input data is base64 encoded
     * @returns {Promise<any>} zipfile
     */
    open(input: string | ArrayBuffer, encoding?: string): Promise<any>;
    /**
     * Clear the JSZip.files to empty
     */
    clear(): void;
    /**
     * Load and Open an archive
     * @param {string} zipUrl
     * @param {boolean} [isBase64] tells JSZip if the input data is base64 encoded
     * @returns {Promise<any>} zipfile
     */
    openUrl(zipUrl: string, isBase64?: boolean): Promise<any>;
    /**
     * Get entry from Archive
     * @param {string} url
     * @returns {object} entry
     * @example archive.get("META-INF/container.xml")
     */
    get(url: string): object;
    /**
     * Get Text from Archive by URL
     * @param {string} url
     * @returns {Promise<string|null>}
     * @override
     */
    override getText(url: string): Promise<string | null>;
}
import Input from "./input";
