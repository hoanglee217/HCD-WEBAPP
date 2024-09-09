import { Input, InputProps, Form, Tooltip } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import React, { ReactNode } from 'react';
import { Controller, UseControllerProps } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { Block, FlexBox, Spacer } from '../../layouts';
import { Text } from '../../typo';
import { FormConnector } from '../FormConnector';
import { AppButton } from '../../buttons';

interface InputFieldProps {
    readonly type?: InputProps['type'];
    readonly name: string;
    readonly label: string;
    readonly placeholder?: string;
    readonly rules?: UseControllerProps['rules'];
    readonly addonBefore?: ReactNode;
    readonly addonAfter?: ReactNode;
    readonly tooltipContent?: string;
    readonly onChange?: InputProps['onChange'];
    readonly onBlur?: InputProps['onBlur'];
    readonly disabled?: boolean;
    readonly description?: string;
}

export const InputField = (props: React.PropsWithChildren<InputFieldProps>) => {
    const { t } = useTranslation();

    const { label, name, placeholder, type, rules, addonBefore, addonAfter, tooltipContent } = props;

    const onRender = React.useCallback(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (renderProps: any) => {
            const { onChange, value } = renderProps.field;
            const { error } = renderProps.fieldState;
            const Component = type === 'password' ? Input.Password : Input;
            
            const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
                const trimmedValue = trimText(e.target.value); 
                onChange(trimmedValue);
                props?.onBlur?.(e);
            };

            const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
                onChange(e);
                props?.onChange?.(e);
            };

            const trimText = (input: string) => {
                return input.trim();
            };

            return (
                <Form.Item
                    validateStatus={error ? 'error' : undefined}
                    help={error?.message && t(error?.message)}
                >
                    <FlexBox>
                        <Component
                            disabled={props.disabled}
                            addonBefore={addonBefore}
                            addonAfter={addonAfter}
                            name={name}
                            value={value}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder={placeholder && t(placeholder)}
                        />
                    </FlexBox>
                </Form.Item>
            );
        },
        [addonAfter, addonBefore, name, placeholder, props, t, type]
    );

    const isRequired = !!rules?.required;

    return (
        <FormConnector>
            {(form) => {
                const { control } = form;
                return (
                    <Block width='100%'>
                        <Spacer bottom={6}>
                            <Text
                                fontWeight={600}
                                lineHeight='20px'
                                color='#344054'
                            >
                                {t(label)}
                            </Text>
                            {isRequired && (
                                <span style={{ color: 'red' }}> *</span>
                            )}
                            {tooltipContent && <Tooltip placement='top' title={<span>{t(tooltipContent)}</span>}>
                                <AppButton type='text' icon={<QuestionCircleOutlined />} />
                            </Tooltip>}
                        </Spacer>
                        {props.description && (<Spacer bottom={4}><Text>{t(props.description)}</Text></Spacer>)}
                        <Controller
                            name={name}
                            control={control}
                            render={onRender}
                            rules={rules}
                        />
                    </Block>
                );
            }}
        </FormConnector>
    );
};
