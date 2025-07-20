//!native

export function setInstanceProperty<T extends Instance, K extends keyof T>(
    instance: T,
    property: K,
    value: any
) {
    instance[property] = value as T[K];
}

export function getInstanceProperty<T extends Instance, K extends keyof T>(
    instance: T,
    property: K
) {
    return instance[property];
}