import { ModalProps } from 'antd/lib/modal';

import { ModalCustom } from '../ModalCustom';
import { HeaderModalFinish } from './HeaderModalFinish';

interface ModalFinishProps extends ModalProps {}

export const ModalFinish = (props: ModalFinishProps) => {
    return (
        <ModalCustom
            open={props?.open}
            title={<HeaderModalFinish />}
            onCancel={props.onCancel}
            footer={props.footer}
            onOk={props.onOk}
            okButtonProps={{
                className: 'btn-finish',
            }}
            okText='Explore'
            showDivider={false}
            style={{
                top: '30%'
            }}
        >
            <div className='line-container'>
                <div className='line one' />
                <div className='line two' />
                <div className='line three' />
                <div className='line four' />
            </div>
            <div className='content'>
                {props?.children}
            </div>
        </ModalCustom>
    );
};
