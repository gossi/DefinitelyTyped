import { ObserverMethod } from '@ember/object/-private/types';

/**
 * Add an event listener
 */
export function addListener(
    obj: object,
    eventName: string,
    target: object | Function | null,
    method?: Function | string,
    once?: boolean
): void

/**
 * Remove an event listener
 *
 * Arguments should match those passed to `addListener`.
 */
export function removeListener(
    obj: object,
    eventName: string,
    target: object | null,
    method?: Function | string
): void

/**
 * Send an event. The execution of suspended listeners
 * is skipped, and once listeners are removed. A listener without
 * a target is executed on the passed object. If an array of actions
 * is not passed, the actions stored on the passed object are invoked.
 */
export function sendEvent(
    obj: any,
    eventName: string,
    params?: any[],
    actions?: any[]
): boolean;
