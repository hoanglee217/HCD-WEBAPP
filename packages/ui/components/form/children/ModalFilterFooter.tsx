import React from 'react';
import { useTranslation } from 'react-i18next';
import { translateCodes } from '../../../locales';
import { AppButton } from '../../buttons';
import { Block, FlexBox, Spacer } from '../../layouts';
import { Text } from '../../typo';

interface ModalFilterFooterProps {
    readonly onCancel?: () => void;
    readonly onReset?: () => void;
    readonly isLoadingButton?: boolean;
}

export const ModalFilterFooter = (props: ModalFilterFooterProps) => {
    const { onCancel, isLoadingButton } = props;
    const {t} = useTranslation();

    return (
        <Spacer type='margin' top={16}>
            <FlexBox justifyContent='space-between' alignItems='center' gap={16}>
                <Spacer left={16}>
                    <Block onClick={props.onReset} className='cursor-pointer'>
                        <Text fontWeight={500} color='#0B5DCC'>{t(translateCodes.CLEAR_ALL)}</Text>
                    </Block>
                </Spacer>
                <FlexBox gap={16} justifyContent='flex-end'>
                    <AppButton
                        width={120}
                        translateCode={translateCodes.CANCEL}
                        onClick={onCancel}
                    />
                    <AppButton
                        width={120}
                        type='primary'
                        loading={isLoadingButton}
                        translateCode={translateCodes.APPLY}
                        htmlType='submit'
                    />
                </FlexBox>
            </FlexBox>
        </Spacer>
    );
};

ModalFilterFooter.defaultProps = {
    cancelTextCode: translateCodes.CANCEL,
    okTextCode: translateCodes.OK,
    isLoadingButton: false,
};
