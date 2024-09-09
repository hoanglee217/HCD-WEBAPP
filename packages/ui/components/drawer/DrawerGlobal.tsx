import { SubDrawer, globalDrawerState } from '@hcd/ui';
import React from 'react';
import { useRecoilState, useResetRecoilState } from 'recoil';

import { DrawerCustom } from './DrawerCustom';

export const DrawerGlobal = () => {
    const [drawerState] = useRecoilState(globalDrawerState);
    const resetDrawerState = useResetRecoilState(globalDrawerState);
    
    return (
        <DrawerCustom
            onClose={() => {
                drawerState?.onClose?.();
                resetDrawerState();
            }}
            open={drawerState?.isOpen}
            drawerTitle={drawerState?.titleTransCode}
            drawerSubtitle={drawerState?.subtitle}
            footer={drawerState?.footer}
            hideHeader={drawerState?.hideHeader}
        >
            {drawerState?.content}
            <SubDrawer />
        </DrawerCustom>
    );
};
