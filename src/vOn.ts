import { type Oel, querySelector } from "./utils";

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

export const on = new Proxy(
  function (
    oel: Oel,
    e: string,
    handler: EventListener,
    optios?: EventListenerOptions,
  ) {
    return _on(oel, e, handler, optios);
  },
  {
    get(target, prop) {
      // todo: 监听快捷键
      console.log("访问：", prop);
      return prop;
    },
  },
);

export function off(
  oel: Oel,
  e: string,
  handler: EventListener,
  optios?: EventListenerOptions,
) {
  _off(oel, e, handler, optios);
}
