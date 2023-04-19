import { type Oel, querySelector } from "./utils";

export function on(oel: Oel, e: string, handler: EventListener, optios?: EventListenerOptions) {
  const el = querySelector(oel);
  if (!el) {
    return;
  }
  el.addEventListener(e, handler, optios);
}

export function off(oel: Oel, e: string, handler: EventListener, optios?: EventListenerOptions) {
  const el = querySelector(oel);
  if (!el) {
    return;
  }
  el.removeEventListener(e, handler, optios);
}
