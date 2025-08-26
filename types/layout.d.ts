export default Layout;
/**
 * Figures out the CSS values to apply for a layout
 */
declare class Layout {
    /**
     * Constructor
     * @param {object} [options]
     * @param {string} [options.flow='paginated'] values: `"paginated"` OR `"scrolled"` OR `"scrolled-doc"`
     * @param {string} [options.spread='auto'] values: `"auto"` OR `"none"`
     * @param {string} [options.direction='ltr'] values: `"ltr"` OR `"rtl"`
     * @param {string} [options.orientation='auto'] values: `"auto"` OR `"landscape"` OR `"portrait"`
     * @param {number} [options.minSpreadWidth=800]
     * @param {number} [options.pageWidth] page width
     * @param {number} [options.pageHeight] page height
     */
    constructor(options?: {
        flow?: string | undefined;
        spread?: string | undefined;
        direction?: string | undefined;
        orientation?: string | undefined;
        minSpreadWidth?: number | undefined;
        pageWidth?: number | undefined;
        pageHeight?: number | undefined;
    });
    /**
     * @member {string} axis
     * @memberof Layout
     * @readonly
     */
    readonly axis: string;
    /**
     * @member {string} name Layout name
     * @memberof Layout
     * @readonly
     */
    readonly name: string;
    /**
     * @member {string} flow
     * @memberof Layout
     * @readonly
     */
    readonly flow: string;
    /**
     * @member {string} style
     * @memberof Layout
     * @readonly
     */
    readonly style: string;
    /**
     * @member {boolean} spread
     * @memberof Layout
     * @readonly
     */
    readonly spread: string;
    /**
     * @member {string} direction
     * @memberof Layout
     * @readonly
     */
    readonly direction: string;
    /**
     * @member {string} orientation no implementation
     * @memberof Layout
     * @readonly
     */
    readonly orientation: string;
    /**
     * @member {string} viewport no implementation
     * @memberof Layout
     * @readonly
     */
    readonly viewport: string;
    /**
     * @member {number} minSpreadWidth
     * @memberof Layout
     * @readonly
     */
    readonly minSpreadWidth: number;
    /**
     * @member {number} width Layout width
     * @memberof Layout
     * @readonly
     */
    readonly width: number;
    /**
     * @member {number} height Layout height
     * @memberof Layout
     * @readonly
     */
    readonly height: number;
    /**
     * @member {number} pageWidth
     * @memberof Layout
     * @readonly
     */
    readonly pageWidth: number;
    /**
     * @member {number} pageHeight
     * @memberof Layout
     * @readonly
     */
    readonly pageHeight: number;
    /**
     * @member {number} spreadWidth Spread width
     * @memberof Layout
     * @readonly
     */
    readonly spreadWidth: number;
    /**
     * @member {number} delta
     * @memberof Layout
     * @readonly
     */
    readonly delta: number;
    /**
     * @member {number} columnWidth Column width
     * @memberof Layout
     * @readonly
     */
    readonly columnWidth: number;
    /**
     * @member {number} gap
     * @memberof Layout
     * @readonly
     */
    readonly gap: number;
    /**
     * @member {number} divisor
     * @memberof Layout
     * @readonly
     */
    readonly divisor: number;
    /**
     * Set options
     * @param {object} options
     */
    set(options: object): void;
    /**
     * Calculate the dimensions of the pagination
     * @param {number} [width] width of the rendering
     * @param {number} [height] height of the rendering
     * @param {number} [gap] width of the gap between columns
     */
    calculate(width?: number, height?: number, gap?: number): void;
    /**
     * Count number of pages
     * @param {number} totalLength
     * @param {number} [pageLength]
     * @return {{spreads: number, pages: number}}
     */
    count(totalLength: number, pageLength?: number): {
        spreads: number;
        pages: number;
    };
    /**
     * destroty
     */
    destroy(): void;
}
