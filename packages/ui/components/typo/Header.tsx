import { Typography } from 'antd';
import React from 'react';

import { Translate } from './Translate';

interface HeaderProps {
    readonly level: 1 | 2 | 3 | 4 | 5;
    readonly translateCode?: string;
    readonly fontSize?: React.CSSProperties['fontSize'];
    readonly fontWeight?: React.CSSProperties['fontWeight'];
    readonly lineHeight?: React.CSSProperties['lineHeight'];
    readonly textAlign?: React.CSSProperties['textAlign'];
    readonly color?: React.CSSProperties['color'];
}

const fontSizeByLevel: Record<number, number> = {
    1: 30,
    2: 20,
    3: 18,
    4: 16,
};

export function Header(props: React.PropsWithChildren<HeaderProps>) {
    const { fontWeight, lineHeight, textAlign, color, level, fontSize } = props;

    const _fontSize = fontSize || fontSizeByLevel[level];

    const style = React.useMemo(() => {
        return {
            fontSize: _fontSize,
            fontWeight,
            lineHeight,
            textAlign,
            color,
        };
    }, [_fontSize, fontWeight, lineHeight, textAlign, color]);

    return (
        <Typography.Title level={level} style={style}>
            {props.translateCode ? (
                <Translate translateCode={props.translateCode} />
            ) : (
                props.children
            )}
        </Typography.Title>
    );
}
