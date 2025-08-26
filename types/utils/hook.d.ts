export default Hook;
/**
 * Hooks allow for injecting functions that must all complete in order before finishing
 * They will execute in parallel but all must finish before continuing
 * Functions may return a promise if they are async.
 */
declare class Hook {
    /**
     * Constructor
     * @param {any} context scope of this
     * @example this.content = new Hook(this);
     */
    constructor(context: any);
    context: any;
    /**
     * @member {Array} tasks
     * @memberof Hook
     * @readonly
     */
    readonly tasks: any[];
    /**
     * Adds a function to be run before a hook completes
     * @example this.content.register(() => {...});
     */
    register(...args: any[]): void;
    /**
     * Removes a function
     * @example this.content.deregister(() => {...});
     */
    deregister(func: any): void;
    /**
     * Triggers a hook to run all functions
     * @example this.content.trigger(args).then(() => {...});
     * @returns {Promise[]}
     */
    trigger(...args: any[]): Promise<any>[];
    /**
     * list
     * @returns {Array}
     */
    list(): any[];
    /**
     * clear
     */
    clear(): void;
}
