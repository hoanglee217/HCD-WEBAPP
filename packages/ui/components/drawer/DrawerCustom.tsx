import './DrawerCustom.scss';
import { Drawer, DrawerProps } from 'antd';
import React from 'react';
import { HeaderDrawer } from './HeaderDrawer';

interface DrawerCustomProps extends DrawerProps {
    drawerTitle?: React.ReactNode;
    drawerSubtitle?: React.ReactNode;
    hideHeader?: boolean;
}

export const DrawerCustom = (props: DrawerCustomProps) => {

    return (
        <Drawer
            className={props.hideHeader ? 'hideHeader' : ''}
            destroyOnClose
            id='drawerCustom'
            width='max-content'
            title={props.drawerTitle ? <HeaderDrawer
                onClose={props.onClose}
                drawerTitle={props.drawerTitle}
                drawerSubtitle={props.drawerSubtitle}
            /> : null}
            onClose={props.onClose}
            open={props.open}
            placement='right'
            closable={false}
            footer={false}
        >
            {props.children}
        </Drawer>
    );
};
