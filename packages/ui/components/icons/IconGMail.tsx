import React from 'react';
import { IconProps } from '../../Types';

export const IconGMail = (props: IconProps) => {
    return (
        <svg
            {...props}
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <g clipPath='url(#clip0_3364_8417)'>
                <path
                    d='M1.63636 21.0043H5.45455V11.7315L0 7.64062V19.3679C0 20.2734 0.733636 21.0043 1.63636 21.0043Z'
                    fill='#4285F4'
                />
                <path
                    d='M18.5454 21.0043H22.3636C23.269 21.0043 24 20.2706 24 19.3679V7.64062L18.5454 11.7315'
                    fill='#34A853'
                />
                <path
                    d='M18.5454 4.64101V11.7319L24 7.64101V5.45919C24 3.43555 21.69 2.28191 20.0727 3.49555'
                    fill='#FBBC04'
                />
                <path
                    d='M5.45459 11.7315V4.64062L12 9.54972L18.5455 4.64062V11.7315L12 16.6406'
                    fill='#EA4335'
                />
                <path
                    d='M0 5.45919V7.64101L5.45455 11.7319V4.64101L3.92727 3.49555C2.30727 2.28191 0 3.43555 0 5.45919Z'
                    fill='#C5221F'
                />
            </g>
            <defs>
                <clipPath id='clip0_3364_8417'>
                    <rect width='24' height='24' fill='white' />
                </clipPath>
            </defs>
        </svg>
    );
};

IconGMail.defaultProps = {
    className: '',
    onClick: () => {},
    color: '#475467',
};
