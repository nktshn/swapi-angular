/**
 * JSON-valid object deep cloning
 * @param object - object to clone
 */

export function cloneDeep<T>(object: T, type?: { new(value): T }): T {
    return type
        ? object && new type(JSON.parse(JSON.stringify(object)))
        : object && JSON.parse(JSON.stringify(object));
}

export function cloneDeepArray<T>(list: T[], type?: { new(value): T }): T[] {
    return list.map(item => {
        return cloneDeep<T>(item, type);
    });
}