import './FormLayout.scss';
import React from 'react';

import { useFormContext } from 'react-hook-form';
import { translateCodes } from '../../locales';
import { Block } from '../layouts';
import { FormModalFooter } from './children';

interface FormLayoutModalProps {
    readonly children: React.ReactNode;
    readonly isLoadingButton?: boolean;
    readonly onCancel?: () => void;
    readonly onOk?: () => void;
    readonly okTextCode?: string;
    readonly cancelTextCode?: string;
    readonly useSubmitButton?: boolean;
    readonly extraFooter?: React.ReactNode;
    readonly className?: string
    readonly alwaysEnableSubmit?: boolean;
}

export const FormLayoutModal = (props: FormLayoutModalProps) => {
    const {formState} = useFormContext();

    const isDisabledSubmit = (formState.isSubmitting || !formState.isDirty) && !props.alwaysEnableSubmit;

    return (
        <Block className='form-layout'>
            <Block className={`form-body ${props.className}`}>
                {props.children}
            </Block>
            <FormModalFooter
                isLoadingButton={props.isLoadingButton}
                onCancel={props.onCancel}
                onOk={props.onOk}
                cancelTextCode={props.cancelTextCode}
                okTextCode={props.okTextCode}
                useSubmitButton={props.useSubmitButton}
                extraFooter={props.extraFooter}
                disabledSubmit={isDisabledSubmit}
            />
        </Block>
    );
};

FormLayoutModal.defaultProps = {
    cancelTextCode: translateCodes.CANCEL,
};

