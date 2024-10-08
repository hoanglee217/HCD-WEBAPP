import React from 'react';
import { IconProps } from '../../Types';

export const IconMore = (props: IconProps) => {
    return (
        <svg
            onClick={props.onClick}
            className={props.className}
            width='16'
            height='4'
            viewBox='0 0 16 4'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            style={{ display: 'block' }}
        >
            <path
                d='M3.83333 2.00016C3.83333 2.92064 3.08714 3.66683 2.16667 3.66683C1.24619 3.66683 0.5 2.92064 0.5 2.00016C0.5 1.07969 1.24619 0.333496 2.16667 0.333496C3.08714 0.333496 3.83333 1.07969 3.83333 2.00016Z'
                fill='#475467'
            />
            <path
                d='M9.66667 2.00016C9.66667 2.92064 8.92047 3.66683 8 3.66683C7.07952 3.66683 6.33333 2.92064 6.33333 2.00016C6.33333 1.07969 7.07952 0.333496 8 0.333496C8.92047 0.333496 9.66667 1.07969 9.66667 2.00016Z'
                fill='#475467'
            />
            <path
                d='M15.5 2.00016C15.5 2.92064 14.7538 3.66683 13.8333 3.66683C12.9129 3.66683 12.1667 2.92064 12.1667 2.00016C12.1667 1.07969 12.9129 0.333496 13.8333 0.333496C14.7538 0.333496 15.5 1.07969 15.5 2.00016Z'
                fill='#475467'
            />
        </svg>
    );
};

IconMore.defaultProps = {
    className: '',
    onClick: () => {},
    color: '#475467',
};
