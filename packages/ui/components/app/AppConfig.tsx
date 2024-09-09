import { objectUtil } from '@hcd/shared';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import i18n, { Resource } from 'i18next';
import React from 'react';
import { RecoilRoot } from 'recoil';

import { I18nextProvider, initReactI18next } from 'react-i18next';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            retry: false
        },
    },
});

interface AppProps {
    readonly i18nResources: Resource[];
    readonly children: React.ReactNode;
}

export const AppConfig = (props: AppProps) => {
    const { i18nResources } = props;

    const [configured, setConfigured] = React.useState(false);

    const configI18n = React.useCallback(async () => {
        const mergedResources = i18nResources.reduce((acc, cur) => objectUtil.deepMerge(acc, cur), {});

        await i18n
            .use(initReactI18next)
            .init({
                resources: mergedResources,
                supportedLngs: Object.keys(mergedResources),
                lng: 'en',
                interpolation: {
                    escapeValue: false
                }
            });
    }, [i18nResources]);

    React.useEffect(() => {
        if (configured) {
            return;
        }

        configI18n().then(() => {
            setConfigured(true);
        });
    }, [configI18n, configured]);

    if (!configured) {
        return null;
    }

    return (
        <RecoilRoot>
            <QueryClientProvider client={queryClient}>
                <I18nextProvider i18n={i18n}>
                    {props.children}
                </I18nextProvider>
            </QueryClientProvider>
        </RecoilRoot>
    );
};