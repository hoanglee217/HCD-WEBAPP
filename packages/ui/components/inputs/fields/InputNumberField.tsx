import { Form, InputNumber, InputNumberProps } from 'antd';
import React from 'react';
import { Controller, UseControllerProps } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { Block, FlexBox, Spacer } from '../../layouts';
import { Text } from '../../typo';
import { FormConnector } from '../FormConnector';

type InputNumberFieldProps = InputNumberProps & {
	readonly name: string;
	readonly label?: string;
    readonly description?: string;
	readonly placeholder?: string;
	readonly rules?: UseControllerProps['rules'];
}

export const InputNumberField = (props: React.PropsWithChildren<InputNumberFieldProps>) => {
    const { t } = useTranslation();

    const { label, name, placeholder, rules, description, onChange: onChangeExtra, ...rest } = props;

    const onRender = React.useCallback(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (renderProps: any) => {
            const { onChange, value } = renderProps.field;
            const { error } = renderProps.fieldState;

            const onInputChange = (value: number | string | undefined) => {
                let newValue = value;
                if(!value) {
                    newValue = props?.min ?? 0;
                }

                onChange(newValue);
                onChangeExtra?.(newValue as number);
            };

            return (
                <Form.Item
                    validateStatus={error ? 'error' : undefined}
                    help={error?.message && t(error?.message)}
                >
                    <FlexBox gap={8} alignItems='center'>
                        <InputNumber
                            name={name}
                            value={value}
                            onChange={(value) => onInputChange(value as number)}
                            placeholder={placeholder && t(placeholder)}
                            {...rest}
                        />
                        {description && <Text>{t(description)}</Text>}
                    </FlexBox>
                </Form.Item>
            );
        },
        [description, name, onChangeExtra, placeholder, props?.min, rest, t]
    );

    const isRequired = !!rules?.required;

    return (
        <FormConnector>
            {(form) => {
                const { control } = form;
                return (
                    <Block width='100%'>
                        {label && (
                            <Spacer bottom={6}>
                                <Text fontWeight={600} lineHeight='20px' color='#344054'>
                                    {t(label)}
                                </Text>
                                {isRequired && <span style={{ color: 'red' }}> *</span>}
                            </Spacer>
                        )}
                        <Controller name={name} control={control} render={onRender} rules={rules} />
                    </Block>
                );
            }}
        </FormConnector>
    );
};
