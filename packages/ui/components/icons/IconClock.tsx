import React from 'react';

import { IconProps } from '../../Types';

export const IconClock = (props: IconProps) => {
    return (
        <svg
            {...props}
            width='21'
            height='20'
            viewBox='0 0 21 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M10.5 2.29166C6.24281 2.29166 2.79167 5.7428 2.79167 10C2.79167 14.2572 6.24281 17.7083 10.5 17.7083C14.7572 17.7083 18.2083 14.2572 18.2083 10C18.2083 5.7428 14.7572 2.29166 10.5 2.29166ZM1.54167 10C1.54167 5.05245 5.55245 1.04166 10.5 1.04166C15.4476 1.04166 19.4583 5.05245 19.4583 10C19.4583 14.9475 15.4476 18.9583 10.5 18.9583C5.55245 18.9583 1.54167 14.9475 1.54167 10ZM10.5 6.04166C10.8452 6.04166 11.125 6.32149 11.125 6.66666V9.74111L13.0253 11.6414C13.2694 11.8855 13.2694 12.2812 13.0253 12.5253C12.7812 12.7694 12.3855 12.7694 12.1414 12.5253L10.0581 10.4419C9.94085 10.3247 9.87501 10.1658 9.87501 10V6.66666C9.87501 6.32149 10.1548 6.04166 10.5 6.04166Z'
                fill={props.color}
            />
        </svg>
    );
};

IconClock.defaultProps = {
    className: '',
    onClick: () => {},
    color: '#475467',
};
