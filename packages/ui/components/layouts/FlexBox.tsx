import React from 'react';

type FlexBoxPreset = 'row-center' | 'column-center' | 'row-start' | 'column-start' | 'row-end' | 'column-end';

interface FlexBoxProps {
    readonly preset?: FlexBoxPreset;
    readonly className?: string;
    readonly height?: React.CSSProperties['height'];
    readonly width?: React.CSSProperties['width'];
    readonly flex: React.CSSProperties['flex'];
    readonly alignItems?: React.CSSProperties['alignItems'];
    readonly justifyContent?: React.CSSProperties['justifyContent'];
    readonly direction?: React.CSSProperties['flexDirection'];
    readonly gap?: React.CSSProperties['gap'];
    readonly backgroundColor?: React.CSSProperties['backgroundColor'];
    readonly borderRadius?: React.CSSProperties['borderRadius'];
    readonly cursor?: React.CSSProperties['cursor'];
    readonly flexWrap?: React.CSSProperties['flexWrap'];
    readonly border?: React.CSSProperties['border'];
    readonly position?: React.CSSProperties['position'];
    readonly onClick?: React.MouseEventHandler;
}

export function FlexBox(props: React.PropsWithChildren<FlexBoxProps>) {
    const { children, flex, alignItems, direction, preset, justifyContent, gap, height, width, backgroundColor, borderRadius, cursor, flexWrap, border, position, onClick } = props;
    const clx = React.useMemo(() => {
        const clx = ['flex-box'];
        if (props.className) {
            clx.push(props.className);
        }
        return clx.join(' ');
    }, [props.className]);

    const style = React.useMemo(() => {
        const style: React.CSSProperties = {
            display: 'flex',
            flex: flex,
            alignItems: alignItems,
            flexDirection: direction,
            justifyContent: justifyContent,
            gap: gap,
            height: height,
            width: width,
            backgroundColor,
            borderRadius,
            cursor,
            flexWrap,
            border,
            position,
        };

        switch (preset) {
        case 'row-center':
            style.alignItems = 'center';
            style.justifyContent = 'center';
            style.flexDirection = 'row';
            break;
        case 'column-center':
            style.justifyContent = 'center';
            style.alignItems = 'center';
            style.flexDirection = 'column';
            break;
        case 'row-start':
            style.justifyContent = 'flex-start';
            style.alignContent = 'flex-start';
            style.flexDirection = 'row';
            break;
        case 'column-start':
            style.justifyContent = 'flex-start';
            style.alignContent = 'flex-start';
            style.flexDirection = 'column';
            break;
        case 'row-end':
            style.justifyContent = 'flex-end';
            style.alignContent = 'flex-end';
            style.flexDirection = 'row';
            break;
        case 'column-end':
            style.justifyContent = 'flex-end';
            style.alignContent = 'flex-end';
            style.flexDirection = 'column';
            break;
        }

        return style;
    }, [flex, alignItems, direction, justifyContent, gap, preset, height, width, backgroundColor, borderRadius, cursor, flexWrap, border, position]);

    return (
        <div className={clx} style={style} onClick={onClick}>
            {children}
        </div>
    );
}

FlexBox.defaultProps = {
    flex: 1
};