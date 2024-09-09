import React from 'react';
import { IconProps } from '../../Types';

export const IconTimeLine = (props: IconProps) => {
    return (
        <svg
            {...props}
            width='16'
            height='16'
            viewBox='0 0 16 16'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M0 4.66797C0 4.39183 0.335786 4.16797 0.75 4.16797H8.75C9.16421 4.16797 9.5 4.39183 9.5 4.66797C9.5 4.94411 9.16421 5.16797 8.75 5.16797H0.75C0.335786 5.16797 0 4.94411 0 4.66797ZM5 8.0013C5 7.72516 5.33579 7.5013 5.75 7.5013H14.75C15.1642 7.5013 15.5 7.72516 15.5 8.0013C15.5 8.27744 15.1642 8.5013 14.75 8.5013H5.75C5.33579 8.5013 5 8.27744 5 8.0013ZM2 11.3346C2 11.0585 2.33579 10.8346 2.75 10.8346H9.75C10.1642 10.8346 10.5 11.0585 10.5 11.3346C10.5 11.6108 10.1642 11.8346 9.75 11.8346H2.75C2.33579 11.8346 2 11.6108 2 11.3346Z'
                fill='#0B5DCC'
            />
        </svg>
    );
};

IconTimeLine.defaultProps = {
    className: '',
    onClick: () => {},
};
