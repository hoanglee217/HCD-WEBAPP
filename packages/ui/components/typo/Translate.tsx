import { TOptions } from 'i18next';
import { useTranslation } from 'react-i18next';

interface TranslateProps {
    readonly translateCode: string;
    readonly option?: TOptions;
}
export function Translate({option, translateCode}: TranslateProps) {
    const { t } = useTranslation();

    return t(translateCode, option);
}