import React from 'react';

type SpacePreset =
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | 'xl2'
    | 'xl2'
    | 'xl3'
    | 'xl4'
    | 'xl5';

interface SpacerProps {
    readonly className?: string;
    readonly type?: 'margin' | 'padding';
    readonly size?: SpacePreset | number;
    readonly top?: SpacePreset | number;
    readonly top_bottom?: SpacePreset | number;
    readonly bottom?: SpacePreset | number;
    readonly left?: SpacePreset | number;
    readonly right?: SpacePreset | number;
    readonly left_right?: SpacePreset | number;
    readonly width?: React.CSSProperties['width'];
    readonly height?: React.CSSProperties['height'];
    readonly display?: React.CSSProperties['display'];
}

const spacePresetMap: Record<SpacePreset, number> = {
    xs: 8,
    sm: 16,
    md: 24,
    lg: 32,
    xl: 40,
    xl2: 48,
    xl3: 56,
    xl4: 64,
    xl5: 72,
};

export function Spacer(props: React.PropsWithChildren<SpacerProps>) {
    const { type, size, top, bottom, left, right, width, height, left_right, top_bottom, display, className } = props;

    const style = React.useMemo(() => {
        const style: React.CSSProperties = {
            width,
            height,
            display
        };
        if (size) {
            const sizeValue =
                typeof size === 'number' ? size : spacePresetMap[size];
            if (type === 'padding') {
                style.padding = sizeValue;
            } else {
                style.margin = sizeValue;
            }
        }
        if (top) {
            const topValue =
                typeof top === 'number' ? top : spacePresetMap[top];
            if (type === 'padding') {
                style.paddingTop = topValue;
            } else {
                style.marginTop = topValue;
            }
        }
        if (bottom) {
            const bottomValue =
                typeof bottom === 'number' ? bottom : spacePresetMap[bottom];
            if (type === 'padding') {
                style.paddingBottom = bottomValue;
            } else {
                style.marginBottom = bottomValue;
            }
        }
        if (left) {
            const leftValue =
                typeof left === 'number' ? left : spacePresetMap[left];
            if (type === 'padding') {
                style.paddingLeft = leftValue;
            } else {
                style.marginLeft = leftValue;
            }
        }
        if (right) {
            const rightValue =
                typeof right === 'number' ? right : spacePresetMap[right];
            if (type === 'padding') {
                style.paddingRight = rightValue;
            } else {
                style.marginRight = rightValue;
            }
        }
        if (left_right) {
            const value = typeof left_right === 'number' ? left_right : spacePresetMap[left_right];
            if (type === 'padding') {
                style.paddingRight = value;
                style.paddingLeft = value;
            } else {
                style.marginRight = value;
                style.marginLeft = value;
            }
        }
        if (top_bottom) {
            const value =
					typeof top_bottom === 'number' ? top_bottom : spacePresetMap[top_bottom];
            if (type === 'padding') {
                style.paddingTop = value;
                style.paddingBottom = value;
            } else {
                style.marginTop = value;
                style.marginBottom = value;
            }
        }
        return style;
    }, [width, height, display, size, top, bottom, left, right, left_right, top_bottom, type]);

    return (
        <div className={`spacer ${className}`} style={style}>
            {props.children}
        </div>
    );
}
