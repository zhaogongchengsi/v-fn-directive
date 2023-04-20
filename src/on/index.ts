import {type Oel, querySelector, warn} from "../utils";
import {FirstKeyboardGroup, MouseEventKey} from './keys'


const _on = (oel : Oel, e : string, handler : EventListener, optios? : EventListenerOptions) => {
    const el = querySelector(oel);
    if (! el) {
        console.warn(`${oel} cannot subscribe to events`)
        return;
    }
    el.addEventListener(e, handler, optios);
    return() => {
        el.removeEventListener(e, handler, optios);
    };
};


export const on = new Proxy(function (oel : Oel, e : string, handler : EventListener, optios? : EventListenerOptions,) {
    return _on(oel, e, handler, optios);
}, {
    get(target, prop) {
        const es: string = prop as string
        if (MouseEventKey.includes(es)) {
            return createMouseEvent(es)
        }
        if (FirstKeyboardGroup.includes(es)) {
            return createKeyboardEvent(es)
        }
		warn(`${es} does not exist`)
        return undefined;
    }
});

function createMouseEvent(e : string) {
    return(el : Oel, handler : EventListener, optios? : EventListenerOptions) => {
        return _on(el, e, handler, optios)
    }
}

function createKeyboardEvent(dk : string) {
    const _dk = dk + "Key"
    return(keys : string, handler : EventListener, optios? : EventListenerOptions) => {
        const _keys = keys.split("-")
        // @ts-ignore
        return _on(document, 'keydown', function (e : KeyboardEvent) { // @ts-ignore
            const isFast: boolean = e[_dk]
            const _key = e.key.toLocaleLowerCase()
            if (isFast && _keys.includes(_key)) {
                handler(e)
            }
        }, optios)
    }
}
