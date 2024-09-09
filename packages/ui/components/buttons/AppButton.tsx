import { Button, ButtonProps } from 'antd';
import React from 'react';

import { useTranslation } from 'react-i18next';
import { Block } from '../layouts';

export interface AppButtonProps extends ButtonProps {
    readonly translateCode?: string;
    readonly width?: React.CSSProperties['width'];
    readonly padding?: React.CSSProperties['padding'];
    readonly textAlign?: React.CSSProperties['textAlign'];
    readonly borderColor?: React.CSSProperties['borderColor'];
}

export const AppButton = (props: AppButtonProps) => {
    const { children, translateCode, width, padding, textAlign, borderColor, ...rest } = props;
    const { t } = useTranslation();

    const style = React.useMemo((): React.CSSProperties => {
        return {
            width,
            padding,
            textAlign,
            borderColor
        };
    }, [borderColor, padding, textAlign, width]);

    return (
        <Button className='app-button' {...rest} style={style}>
            {translateCode ? (
                <Block display='inline-block'>{t(translateCode)}</Block>
            ) : (
                children
            )}
        </Button>
    );
};
