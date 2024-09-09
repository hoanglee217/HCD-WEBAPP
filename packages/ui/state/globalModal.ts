import { atom } from 'recoil';
interface ModalState {
    isOpen?: boolean;
    titleTransCode?: string | JSX.Element | null;
    content?: JSX.Element | null;
    footer?: JSX.Element | null;
    showModalDelete?: boolean;
    showModalConfirm? : boolean;
    showModalFinish? : boolean;
    onOk?: () => void;
    onCancel?: () => void;
    okText?: string;
    cancelText?: string;
    width?: number;
    closeIcon?: JSX.Element | null;
    title?: JSX.Element | null;
    showDivider?: boolean;
}

const globalModalStateDefault: ModalState = {
    isOpen: false,
    titleTransCode: undefined,
    content: null,
    footer: null,
    okText: undefined,
    showModalDelete: false,
    showModalConfirm: false,
    showModalFinish: false,
    closeIcon: undefined,
    title: null,
    showDivider: true,
};

export const globalModalState = atom<ModalState | null>({
    key: 'MODAL_STATE',
    default: globalModalStateDefault,
});

