import { subDrawerState } from '@hcd/ui';
import React from 'react';
import { useRecoilState, useResetRecoilState } from 'recoil';

import { DrawerCustom } from './DrawerCustom';

export const SubDrawer = () => {
    const [drawerState] = useRecoilState(subDrawerState);
    const resetDrawerState = useResetRecoilState(subDrawerState);

    return (
        <DrawerCustom
            onClose={resetDrawerState}
            open={drawerState?.isOpen}
            drawerTitle={drawerState?.titleTransCode}
            drawerSubtitle={drawerState?.subtitle}
            footer={drawerState?.footer}
        >
            {drawerState?.content}
        </DrawerCustom>
    );
};
