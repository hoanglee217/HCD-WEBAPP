import React from 'react';
import { Avatar, AvatarProps } from 'antd';
import { Block } from '..';

const sizes = {
    '2xl': {
        size: 80,
        fontSize: 24,
    },
    lg: {
        size: 56,
        fontSize: 18,
    },
    md: {
        size: 40,
        fontSize: 14,
    },
    sm: {
        size: 32,
        fontSize: 12,
    },
    xs: {
        size: 20,
        fontSize: 10,
    },
};

interface AppAvatarProps<T> {
	readonly data?: T;
	readonly icon?: React.ReactNode;
	readonly size?: keyof typeof sizes;
	readonly className?: string;
}

export const AppAvatar = <T,>({ data, size, icon, className }: AppAvatarProps<T>) => {
    const theme = sizes[size || 'md'];

    const commonProps: AvatarProps = {
        className,
        size: theme.size,
        style: {
            backgroundColor: '#F5F9FF',
            border: '1px solid #EAECF0',
            color: '#667085',
        },
    };

    let propsWithSrc: AvatarProps = {};
    let propsWithIcon: AvatarProps = {};
    let propsWithName: AvatarProps = {};

    const avatarSrc = data?.['avatar' as keyof T] as string;

    if (avatarSrc) {
        propsWithSrc = {
            ...commonProps,
            src: avatarSrc,
        };
    }

    if (data && !avatarSrc) {
        const fullName = data['fullName' as keyof T] as string;
        const arr = fullName?.split(' ');
        const avatarText = arr? arr[0][0] + (arr?.[1]?.[0]??arr[0][1]??'') : '';

        propsWithName = {
            children: (
                <Block>{avatarText.toUpperCase()}</Block>
            ),
            ...commonProps,
        };
    }

    if (icon) {
        propsWithIcon = { ...commonProps, icon: icon };
    }

    return <Avatar {...propsWithIcon} {...propsWithName} {...propsWithSrc} />;
};
