import { Typography } from 'antd';
import React from 'react';
import { EllipsisConfig } from 'antd/es/typography/Base';
import { Translate } from './Translate';
export interface TextProps {
    readonly type?: 'secondary' | 'success' | 'warning' | 'danger';
    readonly translateCode?: string;
    readonly maxLines?: number;
    readonly fontSize?: React.CSSProperties['fontSize'];
    readonly fontWeight?: React.CSSProperties['fontWeight'];
    readonly lineHeight?: React.CSSProperties['lineHeight'];
    readonly textAlign?: React.CSSProperties['textAlign'];
    readonly color?: React.CSSProperties['color'];
    readonly display?: React.CSSProperties['display'];
    readonly whiteSpace?: React.CSSProperties['whiteSpace'];
    readonly overflow?: React.CSSProperties['overflow'];
    readonly textOverflow?: React.CSSProperties['textOverflow'];
    readonly onClick?: () => void;
    readonly className?: string;
    readonly textTransform?: React.CSSProperties['textTransform'];
    readonly letterSpacing?: React.CSSProperties['letterSpacing'];
    readonly textDecoration?: React.CSSProperties['textDecoration'];
    readonly fontStyle?: React.CSSProperties['fontStyle'];
    readonly maxWidth?: React.CSSProperties['maxWidth'];
    readonly ellipsis?: boolean;
}

export function Text(props: React.PropsWithChildren<TextProps>) {
    const {
        fontSize,
        fontWeight,
        lineHeight,
        textAlign,
        color,
        display,
        type,
        whiteSpace,
        overflow,
        textOverflow,
        textTransform,
        letterSpacing,
        textDecoration,
        fontStyle,
        maxWidth,
        onClick,
        maxLines,
        className,
        ellipsis = false
    } = props;

    const style = React.useMemo((): React.CSSProperties => {
        const style: React.CSSProperties = {};
        if(maxLines) {
            style.overflow = 'hidden';
            style.textOverflow = 'ellipsis';
            style.WebkitLineClamp = maxLines;
            style.lineClamp = maxLines;
            style.whiteSpace = 'nowrap ';
            style.WebkitBoxOrient = 'vertical';
        }

        return {
            fontSize,
            fontWeight,
            lineHeight,
            textAlign,
            color,
            display,
            whiteSpace,
            overflow,
            textOverflow,
            textTransform,
            letterSpacing,
            textDecoration,
            fontStyle,
            maxWidth,
            ...style
        };
    }, [maxLines, fontSize, fontWeight, lineHeight, textAlign, color, display, whiteSpace, overflow, textOverflow, textTransform, letterSpacing, textDecoration, fontStyle, maxWidth]);
    
    let ellipsisProps: boolean | Omit<EllipsisConfig, 'expandable' | 'rows' | 'onExpand'> = false;
    if(ellipsis === true){
        ellipsisProps = { tooltip: true };
    }

    return (
        <Typography.Text className={className} style={style} type={type} onClick={onClick} ellipsis={ellipsisProps}>
            {props.translateCode ? (
                <Translate translateCode={props.translateCode} />
            ) : (
                props.children
            )}
        </Typography.Text>
    );
}
