export default Views;
/**
 * Views
 */
declare class Views extends Array<any> {
    /**
     * Constructor
     */
    constructor();
    /**
     * @member {Element} container
     * @memberof Views
     * @readonly
     */
    readonly container: HTMLDivElement | null | undefined;
    init(): void;
    /**
     * first
     * @returns {object} view
     */
    first(): object;
    /**
     * last
     * @returns {object} view
     */
    last(): object;
    /**
     * get
     * @param {number} i index
     * @returns {object} view
     */
    get(i: number): object;
    /**
     * append
     * @param {object} view
     * @returns {object} view
     */
    append(view: object): object;
    /**
     * prepend
     * @param {object} view
     * @returns {object} view
     */
    prepend(view: object): object;
    /**
     * insert
     * @param {object} view
     * @param {number} index
     * @returns {object} view
     */
    insert(view: object, index: number): object;
    /**
     * remove
     * @param {object} view
     * @param {number} [i] index
     */
    remove(view: object, i?: number): void;
    /**
     * clear
     */
    clear(): void;
    /**
     * displayed
     * @returns {object[]}
     */
    displayed(): object[];
    /**
     * show
     */
    show(): void;
    /**
     * hide
     */
    hide(): void;
    /**
     * update
     */
    update(): void;
    /**
     * destroy
     */
    destroy(): void;
}
