/* eslint-disable @typescript-eslint/no-explicit-any */

export const objectUtil = {
    isObject: (obj: unknown) => {
        return obj === Object(obj);
    },
    deepMerge: (target: Record<string, any>, source: Record<string, any>) => {
        const output = { ...target };
        if (objectUtil.isObject(target) && objectUtil.isObject(source)) {
            Object.keys(source).forEach(key => {
                if (objectUtil.isObject(source[key])) {
                    if (!(key in target)) {
                        Object.assign(output, { [key]: source[key] });
                    } else {
                        output[key] = objectUtil.deepMerge(target[key], source[key]);
                    }
                } else {
                    Object.assign(output, { [key]: source[key] });
                }
            });
        }
        return output;
    }
};