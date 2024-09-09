import React from 'react';
import { IconProps } from '../../Types';

export const IconWarning = (props: IconProps) => {
    return (
        <svg
            {...props}
            width='38'
            height='38'
            viewBox='0 0 38 38'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <g opacity='0.3'>
                <path
                    d='M6 19C6 11.8203 11.8203 6 19 6C26.1797 6 32 11.8203 32 19C32 26.1797 26.1797 32 19 32C11.8203 32 6 26.1797 6 19Z'
                    stroke='#F79009'
                    strokeWidth='2'
                />
            </g>
            <g opacity='0.1'>
                <path
                    d='M1 19C1 9.05888 9.05888 1 19 1C28.9411 1 37 9.05888 37 19C37 28.9411 28.9411 37 19 37C9.05888 37 1 28.9411 1 19Z'
                    stroke='#F79009'
                    strokeWidth='2'
                />
            </g>
            <g clipPath='url(#clip0_2_213653)'>
                <path
                    d='M19.0001 15.668V19.0013M19.0001 22.3346H19.0084M27.3334 19.0013C27.3334 23.6037 23.6025 27.3346 19.0001 27.3346C14.3977 27.3346 10.6667 23.6037 10.6667 19.0013C10.6667 14.3989 14.3977 10.668 19.0001 10.668C23.6025 10.668 27.3334 14.3989 27.3334 19.0013Z'
                    stroke='#F79009'
                    strokeWidth='1.66667'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                />
            </g>
            <defs>
                <clipPath id='clip0_2_213653'>
                    <rect width='20' height='20' fill='white' transform='translate(9 9)' />
                </clipPath>
            </defs>
        </svg>
    );
};

IconWarning.defaultProps = {
    className: '',
    onClick: () => {},
    color: '#475467',
};
