import React from 'react';
import { IconProps } from '../../Types';

export const IconFace = (props: IconProps) => {
    return (
        <svg
            className={props.className}
            width={16}
            height={16}
            viewBox='0 0 16 16'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M5.50004 6.00016C5.50004 4.61945 6.61933 3.50016 8.00004 3.50016C9.38075 3.50016 10.5 4.61945 10.5 6.00016C10.5 7.38087 9.38075 8.50016 8.00004 8.50016C6.61933 8.50016 5.50004 7.38087 5.50004 6.00016ZM8.00004 4.50016C7.17161 4.50016 6.50004 5.17174 6.50004 6.00016C6.50004 6.82859 7.17161 7.50016 8.00004 7.50016C8.82847 7.50016 9.50004 6.82859 9.50004 6.00016C9.50004 5.17174 8.82847 4.50016 8.00004 4.50016Z'
                fill={props.color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M0.833374 8.00016C0.833374 4.04212 4.042 0.833496 8.00004 0.833496C11.9581 0.833496 15.1667 4.04212 15.1667 8.00016C15.1667 11.9582 11.9581 15.1668 8.00004 15.1668C4.042 15.1668 0.833374 11.9582 0.833374 8.00016ZM8.00004 1.8335C4.59428 1.8335 1.83337 4.59441 1.83337 8.00016C1.83337 9.69722 2.51889 11.2342 3.62811 12.3492C3.74837 11.7004 3.98467 11.0888 4.45895 10.5969C5.16839 9.86117 6.30282 9.50016 8.00001 9.50016C9.6972 9.50016 10.8316 9.86117 11.5411 10.5969C12.0154 11.0888 12.2517 11.7005 12.3719 12.3492C13.4812 11.2342 14.1667 9.69724 14.1667 8.00016C14.1667 4.59441 11.4058 1.8335 8.00004 1.8335ZM11.4625 13.1038C11.3946 12.2958 11.2191 11.7037 10.8212 11.291C10.3882 10.842 9.58598 10.5002 8.00001 10.5002C6.41404 10.5002 5.61178 10.842 5.17881 11.291C4.78089 11.7037 4.60545 12.2958 4.53752 13.1037C5.5246 13.7747 6.71653 14.1668 8.00004 14.1668C9.28353 14.1668 10.4754 13.7747 11.4625 13.1038Z'
                fill={props.color}
            />
        </svg>
    );
};

IconFace.defaultProps = {
    className: '',
    onClick: () => {},
    color: '#475467',
};