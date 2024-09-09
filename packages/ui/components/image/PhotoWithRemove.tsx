import { Block, IconTrash, Spacer } from '@hcd/ui';
import { Image } from 'antd';
import React from 'react';

interface PhotoWithRemoveProps {
    value?: string;
    defaultValue?: string;
    width?: number | string;
    height?: number | string;
    borderRadius?: number;
    onClick?: () => void;
}

export const PhotoWithRemove = (props: PhotoWithRemoveProps) => {
    const {
        value,
        defaultValue,
        onClick,
        width,
        height,
        borderRadius,
    } = props;

    return (
        <Block
            position='relative'
            height={height}
            width={width}
            borderRadius={borderRadius}
            overflow='hidden'
        >
            <Image width='100%' height='100%' src={value ? value : defaultValue} />
            {value && (
                <Block
                    onClick={() => onClick?.()}
                    cursor='pointer'
                    position='absolute'
                    borderRadius={8}
                    top={7}
                    right={7}
                    backgroundColor='red'
                    width={28}
                    height={30}
                >
                    <Spacer top_bottom={6} left_right={6}>
                        <IconTrash color='white' />
                    </Spacer>
                </Block>
            )}
            
        </Block>
    );
};
