import {type Ref, isProxy} from "@vue/reactivity";
import {Oel, isHtmlElement, querySelector} from "../utils";

import isNumber from 'lodash/isNumber'
import isObject from 'lodash/isObject'
import isArray from 'lodash/isArray'

export type EnumerableItem = Array < any > | Object | number
export type ForItem = Ref | number | string;
export type EnumerableValue = Array < ForItem > | Set < ForItem > | number;
export type EnumerableValueRef = Ref < EnumerableValue > | number

export type VForOptions = {}

export function vfor(fer : EnumerableValueRef, els : Oel, option : VForOptions) {

    const el = querySelector(els)
    const pel = el ?. parentNode
    if (! el) {
        return
    }

    if (isHtmlElement(pel)) {
        throw new Error(` The parent element of ${els}, not allowed to be html`)
    }

    const contentHtml = (el as Element).innerHTML

    if (!isProxy(fer)) {
        const _val = fer as EnumerableItem

        // 是一个普通数组
        if (isNumber(_val)) {
            for (let index = 0; index <= (_val as number); index++) { // 渲染数字
            }
        }

        // 渲染是一个数组
        if (isArray(_val)) {
            for (const iterator of _val as Array < any >) { // 渲染数组
            }
        }
        // 渲染是一个对象
        if (isObject(_val)) {
            for (const key in _val as Object) {
                if (Object.prototype.hasOwnProperty.call(_val, key)) {}
            }
        }
        return
    }

    CreateRefElement()

}

function CreateRefElement() {}
