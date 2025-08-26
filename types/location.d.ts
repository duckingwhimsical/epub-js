export default Location;
/**
 * Location class
 */
declare class Location {
    /**
     * @member {string} cfi EpubCFI string format
     * @memberof Location
     * @readonly
     */
    readonly cfi: any;
    /**
     * @member {number} index Location index
     * @memberof Location
     * @readonly
     */
    readonly index: number;
    /**
     * Percentage in the range from 0 to 1
     * @member {number} percentage
     * @memberof Location
     * @readonly
     */
    readonly percentage: number;
    /**
     * Set location properties
     * @param {object} [props]
     * @param {string} [props.cfi]
     * @param {number} [props.index]
     * @param {number} [props.percentage]
     */
    set(props?: {
        cfi?: string | undefined;
        index?: number | undefined;
        percentage?: number | undefined;
    }): this;
    /**
     * Destroy the Location object
     */
    destroy(): void;
}
