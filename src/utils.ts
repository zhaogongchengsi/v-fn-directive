export type Oel = string | Element | Document;

const toStringCall = (t : any) => Object.prototype.toString.call(t)
export const isString = (t : any) => typeof t === "string";
export const isObject = (t : any) => typeof t === "object" && t != null;
export const isElement = (t : any) => isObject(t) && t instanceof Element
export const isDocument = (t : any) => toStringCall(t) === '[object HTMLDocument]'
export const isArray = (t : any) => Array.isArray(t)
export const isHtmlElement = (t : any) => t instanceof HTMLElement;
export const isNumber = (t:any) => typeof t === "number"

export function querySelector(el : Oel | null): Element | Document | null {

    if (isString(el)) {
        return document.querySelector(el as string);
    }

    if (isElement(el)) {
        return el as Element
    }

    if (isDocument(el)) {
        return el as Document
    }

    return null
}


export function warn(message? : any, ...optionalParams : any[]) {
    console.warn(`[V] ${message}`, ...optionalParams)
}
