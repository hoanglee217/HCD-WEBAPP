import React from 'react';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { useTranslation } from 'react-i18next';
import { globalModalState } from '../../state/globalModal';
import { ModalDelete } from './modal-delete';
import { ModalCustom } from './ModalCustom';
import { ModalConfirm } from './modal-confirm';
import { ModalFinish } from './modal-finish';

export const ModalGlobal = () => {
    const [modalState] = useRecoilState(globalModalState);
    const resetModalState = useResetRecoilState(globalModalState);
    const { t } = useTranslation();

    const onCancel = React.useCallback(() => {
        modalState?.onCancel?.();
        resetModalState();
    }, [modalState, resetModalState]);

    if (modalState?.showModalDelete) {
        return (
            <ModalDelete
                open={modalState?.isOpen}
                onOk={modalState.onOk}
                onCancel={onCancel}
                footer={modalState.footer}
            >
                {modalState?.content}
            </ModalDelete>
        );
    }

    if (modalState?.showModalConfirm) {
        return (
            <ModalConfirm
                open={modalState?.isOpen}
                onOk={modalState.onOk}
                onCancel={onCancel}
                footer={modalState.footer}
            >
                {modalState?.content}
            </ModalConfirm>
        );
    }

    if (modalState?.showModalFinish) {
        return (
            <ModalFinish
                open={modalState?.isOpen}
                onOk={modalState.onOk}
                onCancel={onCancel}
                footer={modalState.footer}
            >
                {modalState?.content}
            </ModalFinish>
        );
    }
    const titleModal = typeof modalState?.titleTransCode === 'string' ? t(modalState.titleTransCode) : modalState?.titleTransCode;
    return (
        <ModalCustom
            destroyOnClose
            open={modalState?.isOpen}
            closeIcon={modalState?.closeIcon}
            title={titleModal}
            onCancel={onCancel}
            cancelText={modalState?.cancelText}
            okText={modalState?.okText}
            footer={modalState?.footer}
            width={modalState?.width}
            onOk={modalState?.onOk}
            showDivider= {modalState?.showDivider}
        >
            {modalState?.content}
        </ModalCustom>
    );
};
