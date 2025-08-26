export default proxyMouse;
/**
 * Start proxying all mouse events that occur on the target node to each node in
 * a set of tracked marks.
 *
 * The marks in tracked do not strictly have to be DOM Nodes, but they do have
 * to have dispatchEvent, getBoundingClientRect, and getClientRects methods.
 *
 * @param {Node} target The node on which to listen for mouse events.
 * @param {Mark[]} marks A (possibly mutable) array of marks to which to proxy events.
 */
declare function proxyMouse(target: Node, marks: Mark[]): void;
import Mark from "./mark";
