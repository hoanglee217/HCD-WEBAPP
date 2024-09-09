import { atom } from 'recoil';
export interface DrawerState {
    isOpen?: boolean;
    titleTransCode?: React.ReactNode;
    content?: JSX.Element | null;
    footer?: JSX.Element | null;    
    onClose?: () => void;
    subtitle?: React.ReactNode;
    hideHeader?: boolean;
}

const globalDrawerStateDefault: DrawerState = {
    isOpen: false,
    titleTransCode: undefined,
    content: null,
    footer: null,
    onClose: () => {},
    subtitle: undefined,
    hideHeader: false,
};

export const globalDrawerState = atom<DrawerState | null>({
    key: 'DRAWER',
    default: globalDrawerStateDefault,
});

