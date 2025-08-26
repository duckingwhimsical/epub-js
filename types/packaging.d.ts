export default Packaging;
/**
 * Open Packaging Format Parser
 */
declare class Packaging {
    /**
     * @member {Metadata} metadata
     * @memberof Packaging
     * @readonly
     */
    readonly metadata: Metadata;
    /**
     * @member {Manifest} manifest
     * @memberof Packaging
     * @readonly
     */
    readonly manifest: Manifest;
    /**
     * @member {Spine} spine
     * @memberof Packaging
     * @readonly
     */
    readonly spine: Spine;
    /**
     * @member {string} direction
     * @memberof Packaging
     * @readonly
     */
    readonly direction: any;
    /**
     * @member {string} version Package version
     * @memberof Packaging
     * @readonly
     */
    readonly version: any;
    /**
     * @member {string} uniqueIdentifier
     * @memberof Packaging
     * @readonly
     */
    readonly uniqueIdentifier: any;
    /**
     * Clear packaging parts
     */
    clear(): void;
    /**
     * Parse OPF XML
     * @param {Document} packageXml OPF XML
     * @return {Promise<Packaging>}
     */
    parse(packageXml: Document): Promise<Packaging>;
    /**
     * Parse direction flow
     * @param {Document} packageXml
     * @param {Node} node spine node
     * @returns {string}
     * @private
     */
    private parseDirection;
    /**
     * Parse package version
     * @param {Document} packageXml
     * @returns {string}
     * @private
     */
    private parseVersion;
    /**
     * Find Unique Identifier
     * @param {Document} packageXml
     * @return {string} Unique Identifier text
     * @private
     */
    private findUniqueIdentifier;
    /**
     * Load package from JSON
     * @param {object} data Serialized JSON object data
     * @return {Promise<Packaging>}
     */
    load(data: object): Promise<Packaging>;
    /**
     * destroy
     */
    destroy(): void;
}
import Metadata from "./packaging/metadata";
import Manifest from "./packaging/manifest";
import Spine from "./packaging/spine";
