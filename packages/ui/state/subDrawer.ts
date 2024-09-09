import { atom } from 'recoil';
import { DrawerState } from './globalDrawer';

const subDrawerStateDefault: DrawerState = {
    isOpen: false,
    titleTransCode: undefined,
    content: null,
    footer: null,
    subtitle: undefined,
};

export const subDrawerState = atom<DrawerState | null>({
    key: 'SUB_DRAWER',
    default: subDrawerStateDefault,
});
