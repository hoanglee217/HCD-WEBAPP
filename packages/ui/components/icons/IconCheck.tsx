import React from 'react';
import { IconProps } from '../../Types';

export const IconCheck = (props: IconProps) => {
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
                d='M16.6666 5L7.49992 14.1667L3.33325 10'
                stroke={props.color}
                strokeWidth='1.66667'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    );
};

IconCheck.defaultProps = {
    color: '#17B26A',
};
