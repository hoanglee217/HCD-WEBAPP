import React from 'react';
import { useTranslation } from 'react-i18next';
import { CloseOutlined } from '@ant-design/icons';
import { FlexBox, Header, IconMinimize, Text } from '..';

interface HeaderDrawerProps {
    drawerTitle?: React.ReactNode;
    drawerSubtitle? :React.ReactNode;
    onMinimize?: () => void;
    onClose?: (e: React.MouseEvent | React.KeyboardEvent) => void;
}

export const HeaderDrawer = (props: HeaderDrawerProps) => {
    const { t } = useTranslation();
    
    return (
        <FlexBox direction='row'>
            {typeof props.drawerTitle === 'string' ? (
                <FlexBox direction='column' alignItems='flex-start' justifyContent='center'>
                    <Header level={2}>
                        {t(props?.drawerTitle ?? '')}
                    </Header>
                    {props.drawerSubtitle &&
                        <Text color='#344054' fontSize={12} fontWeight={400}>
                            {typeof props.drawerSubtitle === 'string' ?
                                t(props?.drawerSubtitle ?? '')
                                : props.drawerSubtitle}
                        </Text>}
                </FlexBox>
            ) : (
                props.drawerTitle
            )}
            <FlexBox gap={12} direction='row' justifyContent='flex-end' alignItems='center'>
                {props?.onMinimize && <span className='minimizeButton'><IconMinimize onClick={props?.onMinimize} /></span>}
                <CloseOutlined onClick={props?.onClose} className='closeButton' />
            </FlexBox>
        </FlexBox>
    );
};

