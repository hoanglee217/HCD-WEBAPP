import './FormLayout.scss';
import React from 'react';

import { translateCodes } from '../../locales';
import { Block } from '../layouts';
import { ModalFilterFooter } from './children/ModalFilterFooter';

interface FormModalFilterProps {
    readonly children: React.ReactNode;
    readonly isLoadingButton?: boolean;
    readonly onCancel?: () => void;
    readonly onReset?: () => void;
}

export const FormModalFilter = (props: FormModalFilterProps) => {
    return (
        <Block className='form-layout'>
            <Block className='form-body'>
                {props.children}
            </Block>
            <ModalFilterFooter
                isLoadingButton={props.isLoadingButton}
                onCancel={props.onCancel}
                onReset={props.onReset}
            />
        </Block>
    );
};

FormModalFilter.defaultProps = {
    cancelTextCode: translateCodes.CANCEL,
};

