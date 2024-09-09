import { Typography } from 'antd';
import React from 'react';

import { Translate } from './Translate';

interface InternalLinkProps {
    readonly href?: string;
    readonly translateCode?: string;
    readonly fontSize?: React.CSSProperties['fontSize'];
    readonly fontWeight?: React.CSSProperties['fontWeight'];
    readonly lineHeight?: React.CSSProperties['lineHeight'];
    readonly textAlign?: React.CSSProperties['textAlign'];
    readonly color?: React.CSSProperties['color'];
    readonly texDecoration?: React.CSSProperties['textDecoration'];
    readonly onclick?: () => void;
}

export function ExternalLink(
    props: React.PropsWithChildren<InternalLinkProps>
) {
    const {
        href,
        fontSize,
        fontWeight,
        lineHeight,
        textAlign,
        color,
        texDecoration,
        onclick,
    } = props;

    const style = React.useMemo(() => {
        return {
            fontSize,
            fontWeight,
            lineHeight,
            textAlign,
            color,
            texDecoration,
            onclick,
        };
    }, [
        fontSize,
        fontWeight,
        lineHeight,
        textAlign,
        color,
        texDecoration,
        onclick,
    ]);

    return (
        <Typography.Link href={href} style={style} onClick={onclick}>
            {props.translateCode ? (
                <Translate translateCode={props.translateCode} />
            ) : (
                props.children
            )}
        </Typography.Link>
    );
}
