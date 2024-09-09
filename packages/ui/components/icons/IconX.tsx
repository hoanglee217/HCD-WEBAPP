import React from 'react';
import { IconProps } from '../../Types';

export const IconX = (props: IconProps) => {
    return (
        <svg
            {...props}
            width='20'
            height='20'
            viewBox='0 0 20 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M15 5L5 15M5 5L15 15'
                stroke='#F04438'
                strokeWidth='1.66667'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    );
};
