import { atom } from 'recoil';
export interface LocaleState {
    readonly currency?: string;
    readonly language?: string;
    readonly timezone?: string;
    readonly country?: string;
    readonly format?: string;
}

const localeDefault: LocaleState = {
    currency: 'USD',
    language: 'en',
    timezone: 'America/New_York',
    country: 'US',
    format: 'MMM DD, YYYY'
};

export const currentLocaleState = atom<LocaleState | null>({
    key: 'CURRENT_LOCALE',
    default: localeDefault,
});

