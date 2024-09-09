export const urlUtil = {
    getQueryValues: <T extends Record<string, string>>(search: string): T => {
        const params = new URLSearchParams(search);
        const entries = params.entries();
        const searchParams = {} as T;

        for (const [key, value] of entries) {
            searchParams[key as keyof T] = value as T[keyof T];
        }

        return searchParams;
    },
    toRelativeUrl: (url: string, queryObj: Record<string, unknown>): string => {
        const searchString = Object.entries(queryObj)
            .map(([key, value]) => `${key}=${value}`)
            .join('&');

        return `${url}?${searchString}`;
    }
};