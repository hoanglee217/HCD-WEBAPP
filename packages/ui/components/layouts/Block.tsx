import React from 'react';

interface BlockProps {
    readonly id?: string;
    readonly className?: string;
    readonly color?: React.CSSProperties['color'];
    readonly display?: React.CSSProperties['display'];
    readonly textAlign?: React.CSSProperties['textAlign'];
    readonly width?: React.CSSProperties['width'];
    readonly minWidth?: React.CSSProperties['minWidth'];
    readonly maxWidth?: React.CSSProperties['maxWidth'];
    readonly height?: React.CSSProperties['height'];
    readonly backgroundColor?: React.CSSProperties['backgroundColor'];
    readonly backgroundImage?: React.CSSProperties['backgroundImage'];
    readonly backgroundRepeat?: React.CSSProperties['backgroundRepeat'];
    readonly backgroundPosition?: React.CSSProperties['backgroundPosition'];
    readonly overflow?: React.CSSProperties['overflow'];
    readonly borderRadius?: React.CSSProperties['borderRadius'];
    readonly position?: React.CSSProperties['position'];
    readonly left?: React.CSSProperties['left'];
    readonly right?: React.CSSProperties['right'];
    readonly bottom?: React.CSSProperties['bottom'];
    readonly top?: React.CSSProperties['top'];
    readonly transform?: React.CSSProperties['transform'];
    readonly border?: React.CSSProperties['border'];
    readonly onScroll?: React.UIEventHandler<HTMLDivElement>
    readonly onClick?: React.MouseEventHandler<HTMLDivElement>;
    readonly zIndex?: React.CSSProperties['zIndex'];
    readonly flexGrow?: React.CSSProperties['flexGrow'];
    readonly cursor?: React.CSSProperties['cursor'];
    readonly objectFit?: React.CSSProperties['objectFit'];
}

export function Block(props: React.PropsWithChildren<BlockProps>) {
    const {
        id,
        children,
        display,
        textAlign,
        color,
        width,
        height,
        backgroundColor,
        backgroundImage,
        backgroundRepeat,
        backgroundPosition,
        overflow,
        borderRadius,
        position,
        left,
        right,
        bottom,
        top,
        minWidth,
        maxWidth,
        className,
        transform,
        border,
        onScroll,
        onClick,
        zIndex,
        flexGrow,
        cursor,
        objectFit
    } = props;

    const clx = React.useMemo(() => className ? `block ${className}` : 'block', [className]);

    const style = React.useMemo((): React.CSSProperties => {
        return {
            color: color,
            display: display,
            textAlign: textAlign,
            width: width,
            height: height,
            backgroundColor: backgroundColor,
            backgroundImage: backgroundImage,
            backgroundRepeat: backgroundRepeat,
            backgroundPosition: backgroundPosition,
            overflow,
            borderRadius: borderRadius,
            position: position,
            left,
            right,
            bottom,
            top,
            minWidth,
            maxWidth,
            transform,
            border,
            zIndex,
            flexGrow,
            cursor,
            objectFit
        };
    }, [
        color,
        display,
        textAlign,
        width,
        height,
        backgroundColor,
        backgroundImage,
        backgroundRepeat,
        backgroundPosition,
        overflow,
        borderRadius,
        position,
        left,
        right,
        bottom,
        top,
        minWidth,
        maxWidth,
        transform,
        border,
        zIndex,
        flexGrow,
        cursor,
        objectFit
    ]);

    return (
        <div id={id} className={clx} style={style} onScroll={onScroll} onClick={onClick}>
            {children}
        </div>
    );
}
