import { Typography } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Translate } from './Translate';

interface InternalLinkProps {
    readonly href: string;
    readonly translateCode?: string;
    readonly fontSize?: React.CSSProperties['fontSize'];
    readonly fontWeight?: React.CSSProperties['fontWeight'];
    readonly lineHeight?: React.CSSProperties['lineHeight'];
    readonly textAlign?: React.CSSProperties['textAlign'];
    readonly color?: React.CSSProperties['color'];
}

export function InternalLink(
    props: React.PropsWithChildren<InternalLinkProps>
) {
    const { href, fontSize, fontWeight, lineHeight, textAlign, color } = props;
    const navigate = useNavigate();

    const style = React.useMemo(() => {
        return {
            fontSize,
            fontWeight,
            lineHeight,
            textAlign,
            color,
        };
    }, [fontSize, fontWeight, lineHeight, textAlign, color]);

    const onClick = React.useCallback(
        (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
            e.preventDefault();
            navigate(href);
        },
        [href, navigate]
    );

    return (
        <Typography.Link href={href} style={style} onClick={onClick}>
            {props.translateCode ? (
                <Translate translateCode={props.translateCode} />
            ) : (
                props.children
            )}
        </Typography.Link>
    );
}
