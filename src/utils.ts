export type Oel = string | Element;

export const isString = (t: any) => typeof t === "string";
export const isObject = (t: any) => typeof t === "object" && t != null;
export const isElement = (t:any) => isObject(t) && t instanceof Element

export function querySelector(el: Oel) :Element | null {
  if (isString(el)) {
    return document.querySelector(el as string);
  }
  if (isElement(el)) {
	return el as Element
  }

  return null
}

