import './FormLayout.scss';
import { Segmented, Steps } from 'antd';
import { SegmentedLabeledOption } from 'antd/es/segmented';
import React, { useCallback } from 'react';
import { useFormContext } from 'react-hook-form';

import { translateCodes } from '../../locales';
import { Block, FlexBox, Spacer } from '../layouts';
import { FormDrawerFooter } from './children';

interface StepProps {
    readonly title: string;
    readonly description?: string;
}

interface FormLayoutProps {
    readonly className?: string;
    readonly width?: React.CSSProperties['width'];
    readonly uxMode?: 'steps' | 'tabs' | 'default';
    readonly itemsStep?: StepProps[];
    readonly labelSubmitCode?: string;
    readonly onDeleted?: () => void;
    readonly isLoadingButton?: boolean;
    readonly isDangerSubmit?: boolean;
    readonly alwaysEnableSubmit?: boolean;
    readonly footer?: React.ReactNode;
    readonly children: ((stepCurrent: number) => React.ReactNode) | React.ReactNode;
}

export const FormLayout = (props: FormLayoutProps) => {
    const {itemsStep = [], labelSubmitCode} = props;
    const [step, setStep] = React.useState<number>(0);
    const { trigger, formState, watch } = useFormContext();
    const isFormUpdate = !!watch('id');

    const onNext = useCallback(async () => {
        const isValid = await trigger();
        if (!isValid) return;

        setStep(step + 1);
    }, [step, trigger]);

    const onBack = useCallback(() => {
        setStep(step - 1);
    }, [step]);

    const endStep = itemsStep.length - 1;
    const showBackButton = step > 0 && props.uxMode === 'steps';
    const isEndStep = step === endStep || props.uxMode !== 'steps';

    const disableSubmit = !formState.isDirty && !props.alwaysEnableSubmit && isEndStep && isFormUpdate;

    return (
        <Block className={`${props.className} form-layout`} width={props.width}>
            <Block className='form-body'>
                {props.uxMode === 'steps' && (
                    <Block className='form-step'>
                        <Steps
                            current={step}
                            labelPlacement='vertical'
                            size='small'
                            items={props.itemsStep}
                        />
                    </Block>
                )}
                {props.uxMode === 'tabs' && (
                    <Spacer type='margin' bottom={16}>
                        <FlexBox justifyContent='center' alignItems='center' >
                            <Segmented
                                style={{ width: '100%' }}
                                size='large'
                                options={props.itemsStep as SegmentedLabeledOption[]}
                                value={step}
                                onChange={(value) => {
                                    setStep(Number(value));
                                }}
                            />
                        </FlexBox>
                    </Spacer>
                )}
                {props.children instanceof Function ? props.children(step) : props.children}
            </Block>
            {props.footer
                ? props.footer
                : (
                    <FormDrawerFooter
                        nextOrSubmitButton={{
                            disabled: disableSubmit,
                            onClick: onNext,
                            htmlType: isEndStep ? 'submit' : 'button',
                            label: isEndStep ? labelSubmitCode : translateCodes.NEXT,
                            danger: props.isDangerSubmit,
                            loading: props.isLoadingButton
                        }}
                        backButton={{
                            show: showBackButton,
                            onClick: onBack,
                        }}
                        deleteButton={{
                            show: props.onDeleted !== undefined,
                            onClick: props.onDeleted,
                            danger: true
                        }}
                    />
                )}
        </Block>
    );
};

FormLayout.defaultProps = {
    labelSubmitCode: translateCodes.CREATE,
    uxMode: 'default',
    width: 632
};
