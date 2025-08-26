export function replaceBase(doc: Document, section: Section): void;
export function replaceCanonical(doc: Document, section: Section): void;
export function replaceMeta(doc: Document, section: Section): void;
export function replaceLinks(contents: Node, cb: Function): NodeList;
export function substitute(content: string, section: Section, urls: string[], repl: string[]): string;
import Section from "../section";
