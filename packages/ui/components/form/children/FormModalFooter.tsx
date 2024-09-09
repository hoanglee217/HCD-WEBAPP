import React from 'react';
import { translateCodes } from '../../../locales';
import { AppButton } from '../../buttons';
import { Block, FlexBox, Spacer } from '../../layouts';

interface FormModalFooterProps {
    readonly onCancel?: () => void;
    readonly onOk?: () => void;
    readonly cancelTextCode?: string;
    readonly okTextCode?: string;
    readonly isLoadingButton?: boolean;
    readonly useSubmitButton?: boolean;
    readonly extraFooter?: React.ReactNode;
    readonly disabledSubmit?: boolean;
}

export const FormModalFooter = (props: FormModalFooterProps) => {
    const { onCancel, onOk, isLoadingButton, cancelTextCode, okTextCode, extraFooter, disabledSubmit } = props;

    return (
        <Block className='modal-footer'>
            {extraFooter && 
            <Spacer type='margin' top={12} bottom={12}>
                {extraFooter}
            </Spacer>
            }
            <FlexBox justifyContent='flex-end' alignItems='center' gap={16}>
                {onCancel && (
                    <AppButton
                        width='20%'
                        translateCode={cancelTextCode}
                        onClick={onCancel}
                    />
                )}
                {onOk && (
                    <AppButton
                        width='20%'
                        type='primary'
                        loading={isLoadingButton}
                        translateCode={okTextCode}
                        onClick={onOk}
                    />
                )}
                {props.useSubmitButton && (
                    <AppButton
                        width='20%'
                        type='primary'
                        loading={isLoadingButton}
                        translateCode={okTextCode}
                        htmlType='submit'
                        disabled={disabledSubmit}
                    />
                )}
            </FlexBox>
        </Block>
    );
};

FormModalFooter.defaultProps = {
    cancelTextCode: translateCodes.CANCEL,
    okTextCode: translateCodes.OK,
    isLoadingButton: false,
};
