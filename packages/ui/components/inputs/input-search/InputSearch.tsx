import { SearchOutlined } from '@ant-design/icons';
import { Input, InputProps } from 'antd';
import React from 'react';
import './InputSearch.scss';

interface InputSearchProps extends InputProps {
    height?: number;
    width?: number | string;
}

export const InputSearch = (props: InputSearchProps) => {
    const { height, width, ...rest } = props;

    const inputStyle: React.CSSProperties = {
        height: height ? `${height}px` : undefined,
        width: width || '100%',
    };
    return <Input className='input-search' style={inputStyle} prefix={<SearchOutlined />} {...rest}  />;
};
