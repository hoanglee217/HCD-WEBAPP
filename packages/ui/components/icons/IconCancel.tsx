import React from 'react';
import { IconProps } from '../../Types';

export const IconCancel = (props: IconProps) => {
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
                fillRule='evenodd'
                clipRule='evenodd'
                d='M6.04167 1.25C6.38685 1.25 6.66667 1.52982 6.66667 1.875V2.5106C7.21836 2.49999 7.82617 2.49999 8.49465 2.5H11.922C12.5905 2.49999 13.1983 2.49999 13.75 2.5106V1.875C13.75 1.52982 14.0298 1.25 14.375 1.25C14.7202 1.25 15 1.52982 15 1.875V2.56424C15.2166 2.58075 15.4217 2.60152 15.6159 2.62761C16.5929 2.75897 17.3837 3.03573 18.0073 3.65937C18.6309 4.283 18.9077 5.0738 19.0391 6.05081C19.081 6.36306 19.1092 6.70382 19.1281 7.07506C19.153 7.14255 19.1667 7.21551 19.1667 7.29167C19.1667 7.34944 19.1588 7.40537 19.1442 7.45847C19.1667 8.12678 19.1667 8.88562 19.1667 9.74466V11.4583C19.1667 11.8035 18.8868 12.0833 18.5417 12.0833C18.1965 12.0833 17.9167 11.8035 17.9167 11.4583V9.79167C17.9167 9.07999 17.9164 8.46061 17.9058 7.91667H2.5109C2.50027 8.46061 2.5 9.07999 2.5 9.79167V11.4583C2.5 13.0473 2.50133 14.1762 2.61647 15.0326C2.72919 15.871 2.94058 16.3541 3.29325 16.7067C3.64593 17.0594 4.12897 17.2708 4.96737 17.3835C5.82376 17.4987 6.95265 17.5 8.54167 17.5H11.875C12.2202 17.5 12.5 17.7798 12.5 18.125C12.5 18.4702 12.2202 18.75 11.875 18.75H8.49466C6.96319 18.75 5.75016 18.75 4.80081 18.6224C3.8238 18.491 3.03301 18.2143 2.40937 17.5906C1.78573 16.967 1.50897 16.1762 1.37761 15.1992C1.24998 14.2498 1.24999 13.0368 1.25 11.5053V9.74465C1.24999 8.88562 1.24999 8.12679 1.27251 7.45847C1.25784 7.40537 1.25 7.34943 1.25 7.29167C1.25 7.21551 1.26362 7.14254 1.28856 7.07505C1.30746 6.70382 1.33563 6.36305 1.37761 6.05081C1.50897 5.0738 1.78573 4.283 2.40937 3.65937C3.03301 3.03573 3.8238 2.75897 4.80081 2.62761C4.99492 2.60152 5.20005 2.58075 5.41667 2.56424V1.875C5.41667 1.52982 5.69649 1.25 6.04167 1.25ZM2.56807 6.66667H17.8486C17.8353 6.50884 17.8193 6.35936 17.8002 6.21737C17.6875 5.37897 17.4761 4.89593 17.1234 4.54325C16.7707 4.19058 16.2877 3.97919 15.4493 3.86647C14.5929 3.75133 13.464 3.75 11.875 3.75H8.54167C6.95265 3.75 5.82376 3.75133 4.96737 3.86647C4.12897 3.97919 3.64593 4.19058 3.29325 4.54325C2.94058 4.89593 2.72919 5.37897 2.61647 6.21737C2.59738 6.35936 2.58142 6.50884 2.56807 6.66667Z'
                fill={props.color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M17.875 15.625C17.875 16.6605 17.0355 17.5 16 17.5C15.7105 17.5 15.4364 17.4344 15.1916 17.3173C15.1915 17.3174 15.1917 17.3172 15.1916 17.3173L17.6919 14.8169C17.6918 14.8171 17.6921 14.8168 17.6919 14.8169C17.8091 15.0617 17.875 15.3355 17.875 15.625ZM14.3077 16.4334C14.3076 16.4335 14.3078 16.4333 14.3077 16.4334L16.8081 13.9331C16.8079 13.9332 16.8082 13.9329 16.8081 13.9331C16.5633 13.8159 16.2895 13.75 16 13.75C14.9645 13.75 14.125 14.5895 14.125 15.625C14.125 15.9145 14.1906 16.1886 14.3077 16.4334ZM19.125 15.625C19.125 17.3509 17.7259 18.75 16 18.75C14.2741 18.75 12.875 17.3509 12.875 15.625C12.875 13.8991 14.2741 12.5 16 12.5C17.7259 12.5 19.125 13.8991 19.125 15.625Z'
                fill={props.color}
            />
        </svg>
    );
};

IconCancel.defaultProps = {
    className: '',
    onClick: () => {},
    color: '#475467',
};