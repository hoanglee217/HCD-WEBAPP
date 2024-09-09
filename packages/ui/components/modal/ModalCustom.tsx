import './ModalCustom.scss';
import { Modal } from 'antd';
import { ModalProps } from 'antd/lib/modal';
import React from 'react';

interface ModalCustomProps extends ModalProps {
    children?: React.ReactNode;
    showDivider?: boolean;
}

export const ModalCustom = (props: ModalCustomProps) => {
    const { children, ...rest } = props;

    const showFooter = props.footer !== null;
    const showDivider = props.showDivider != false;
    return (
        <Modal
            className={`modal-custom ${showDivider && 'show-divider'} ${showFooter && 'show-footer'}`} {...rest} closeIcon={props.closeIcon}>
            {children}
        </Modal>
    );
};
