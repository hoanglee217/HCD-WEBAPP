import { Typography } from 'antd';
import React from 'react';

import { Translate } from './Translate';

interface ParagraphProps {
    readonly translateCode?: string;
    readonly fontSize?: React.CSSProperties['fontSize'];
    readonly fontWeight?: React.CSSProperties['fontWeight'];
    readonly lineHeight?: React.CSSProperties['lineHeight'];
    readonly textAlign?: React.CSSProperties['textAlign'];
    readonly color?: React.CSSProperties['color'];
    readonly display?: React.CSSProperties['display'];
}

export function Paragraph(props: React.PropsWithChildren<ParagraphProps>) {
    const { fontSize, fontWeight, lineHeight, textAlign, color, display } =
        props;

    const style = React.useMemo(() => {
        return {
            fontSize,
            fontWeight,
            lineHeight,
            textAlign,
            color,
            display,
            margin: 0,
        };
    }, [fontSize, fontWeight, lineHeight, textAlign, color, display]);

    return (
        <Typography.Paragraph style={style}>
            {props.translateCode ? (
                <Translate translateCode={props.translateCode} />
            ) : (
                props.children
            )}
        </Typography.Paragraph>
    );
}
