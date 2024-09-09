import { objectUtil } from '@hcd/shared';
import i18n, { Resource } from 'i18next';
import { initReactI18next } from 'react-i18next';

export const initI18n = (...resources: Resource[]) => {
    const mergedResources = resources.reduce((acc, cur) => {
        return objectUtil.deepMerge(acc, cur);
    }, {});

    i18n
        .use(initReactI18next)
        .init({
            resources: mergedResources,
            lng: 'vn',
            interpolation: {
                escapeValue: false
            }
        });
};