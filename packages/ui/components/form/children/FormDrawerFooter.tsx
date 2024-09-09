import React from 'react';

import { useResetRecoilState } from 'recoil';
import { translateCodes } from '../../../locales';
import { AppButton } from '../../buttons';
import { Block, FlexBox } from '../../layouts';
import { globalDrawerState } from '../../../state';

interface FormActionButtonProps {
    readonly label?: string;
    readonly onClick?: () => void;
    readonly loading?: boolean;
    readonly danger?: boolean;
    readonly disabled?: boolean;
    readonly htmlType?: 'button' | 'submit' | 'reset';
    readonly show?: boolean;
}
interface FormDrawerFooterProps {
    readonly nextOrSubmitButton?: FormActionButtonProps;
    readonly backButton?: FormActionButtonProps;
    readonly deleteButton?: FormActionButtonProps;
}

export const FormDrawerFooter = (props: FormDrawerFooterProps) => {
    const resetDrawerState = useResetRecoilState(globalDrawerState);

    return (
        <Block className='form-footer' height={40}>
            <FlexBox justifyContent='space-between' alignItems='center'>
                <FlexBox gap={16} justifyContent='flex-start'>
                    {props.backButton?.show && (
                        <AppButton
                            width={120}
                            translateCode={translateCodes.BACK}
                            type='primary'
                            ghost
                            onClick={props.backButton.onClick}
                        />
                    )}
                    {props.deleteButton?.show && (
                        <AppButton
                            width={120}
                            loading={props.deleteButton.loading}
                            translateCode={translateCodes.DELETE}
                            danger={props.deleteButton.danger}
                            onClick={props.deleteButton.onClick}
                        />
                    )}
                </FlexBox>
                <FlexBox justifyContent='flex-end' gap={20}>
                    <AppButton
                        width={120}
                        translateCode={translateCodes.CANCEL}
                        onClick={resetDrawerState}
                    />
                    <AppButton
                        width={120}
                        type='primary'
                        loading={props?.nextOrSubmitButton?.loading}
                        translateCode={props.nextOrSubmitButton?.label}
                        htmlType={props.nextOrSubmitButton?.htmlType}
                        danger={props.nextOrSubmitButton?.danger}
                        disabled={props.nextOrSubmitButton?.disabled}
                        onClick={(e)=>{
                            if(props.nextOrSubmitButton?.htmlType === 'button'){
                                e.preventDefault();
                                props?.nextOrSubmitButton?.onClick?.();
                            }
                        }}
                    />
                </FlexBox>
            </FlexBox>
        </Block>
    );
};
