import { type Oel, querySelector } from "./utils";

const systemModifiers = ["ctrl", "shift", "alt", "meta"];

const _on = (
  oel: Oel,
  e: string,
  handler: EventListener,
  optios?: EventListenerOptions,
) => {
  const el = querySelector(oel);
  if (!el) {
    return;
  }
  el.addEventListener(e, handler, optios);
  return () => {
    el.removeEventListener(e, handler, optios);
  };
};

const _off = (
  oel: Oel,
  e: string,
  handler: EventListener,
  optios?: EventListenerOptions,
) => {
  const el = querySelector(oel);
  if (!el) {
    return;
  }
  el.removeEventListener(e, handler, optios);
};

export function on(
  oel: Oel,
  e: string,
  handler: EventListener,
  optios?: EventListenerOptions,
) {
  return _on(oel, e, handler, optios);
}

// todo: 监听快捷键

export function off(
  oel: Oel,
  e: string,
  handler: EventListener,
  optios?: EventListenerOptions,
) {
  _off(oel, e, handler, optios);
}
