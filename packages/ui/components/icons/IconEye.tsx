import React from 'react';

import { IconProps } from '../../Types';

export const IconEye = (props: IconProps) => {
    return (
        <svg
            onClick={props.onClick}
            className={props.className}
            width='18'
            height='20'
            viewBox='0 0 18 16'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M9.00002 4.87492C7.27413 4.87492 5.87502 6.27403 5.87502 7.99992C5.87502 9.72581 7.27413 11.1249 9.00002 11.1249C10.7259 11.1249 12.125 9.72581 12.125 7.99992C12.125 6.27403 10.7259 4.87492 9.00002 4.87492ZM7.12502 7.99992C7.12502 6.96438 7.96449 6.12492 9.00002 6.12492C10.0356 6.12492 10.875 6.96438 10.875 7.99992C10.875 9.03545 10.0356 9.87492 9.00002 9.87492C7.96449 9.87492 7.12502 9.03545 7.12502 7.99992Z'
                fill={props.color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M9.00002 0.708252C5.23824 0.708252 2.70443 2.96175 1.23383 4.8723L1.2073 4.90675C0.874719 5.3387 0.568404 5.73652 0.360593 6.20692C0.138057 6.71064 0.041687 7.25966 0.041687 7.99992C0.041687 8.74018 0.138057 9.28919 0.360593 9.79292C0.568405 10.2633 0.874721 10.6611 1.20731 11.0931L1.23383 11.1275C2.70443 13.0381 5.23824 15.2916 9.00002 15.2916C12.7618 15.2916 15.2956 13.0381 16.7662 11.1275L16.7927 11.0931C17.1253 10.6612 17.4316 10.2633 17.6394 9.79292C17.862 9.28919 17.9584 8.74018 17.9584 7.99992C17.9584 7.25966 17.862 6.71064 17.6394 6.20692C17.4316 5.73651 17.1253 5.33868 16.7927 4.90673L16.7662 4.8723C15.2956 2.96175 12.7618 0.708252 9.00002 0.708252ZM2.22437 5.63475C3.58222 3.87068 5.79199 1.95825 9.00002 1.95825C12.2081 1.95825 14.4178 3.87068 15.7757 5.63475C16.1412 6.10958 16.3552 6.3933 16.4961 6.71204C16.6277 7.00993 16.7084 7.37403 16.7084 7.99992C16.7084 8.62581 16.6277 8.98991 16.4961 9.2878C16.3552 9.60654 16.1412 9.89026 15.7757 10.3651C14.4178 12.1292 12.2081 14.0416 9.00002 14.0416C5.79199 14.0416 3.58222 12.1292 2.22437 10.3651C1.85888 9.89026 1.6448 9.60654 1.50399 9.2878C1.37239 8.9899 1.29169 8.62581 1.29169 7.99992C1.29169 7.37403 1.37239 7.00993 1.50399 6.71204C1.6448 6.3933 1.85888 6.10958 2.22437 5.63475Z'
                fill={props.color}
            />
        </svg>
    );
};

IconEye.defaultProps = {
    className: '',
    onClick: () => {},
    color: '#475467',
};