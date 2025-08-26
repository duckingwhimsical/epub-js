export default Queue;
/**
 * Queue for handling tasks one at a time
 * @extends {Array}
 */
declare class Queue extends Array<any> {
    /**
     * Constructor
     * @param {object} context what this will resolve to in the tasks
     */
    constructor(context: object);
    context: object;
    running: boolean;
    paused: boolean;
    /**
     * Add an item to the queue
     * @param {any} task
     * @param {Array} args
     * @return {Promise<any>}
     */
    enqueue(task: any, ...args: any[]): Promise<any>;
    /**
     * Run one item
     * @return {Promise<any>}
     */
    dequeue(): Promise<any>;
    /**
     * Run All Immediately
     */
    dump(): void;
    /**
     * Run all tasks sequentially, at convince
     * @return {Promise<any>}
     */
    run(): Promise<any>;
    deferred: Defer | undefined;
    /**
     * Clear all items in wait
     */
    clear(): void;
    /**
     * Pause a running queue
     */
    pause(): void;
    /**
     * End the queue
     */
    stop(): void;
    /**
     * Destroy the Queue object
     */
    destroy(): void;
}
import Defer from "./defer";
