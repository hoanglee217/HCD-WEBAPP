import { Radio } from 'antd';
import React from 'react';
import { Controller, UseControllerProps } from 'react-hook-form';

import { useTranslation } from 'react-i18next';
import { Block, Spacer } from '../../layouts';
import { Text } from '../../typo';
import { FormConnector } from '../FormConnector';

interface RadioGroupFieldProps {
	readonly disabled?: boolean;
	readonly label?: string;
	readonly required?: boolean;
	readonly name: string;
	readonly rules?: UseControllerProps['rules'];
}

export const RadioGroupField = (props: React.PropsWithChildren<RadioGroupFieldProps>) => {
    const { children, name, rules, label, required, disabled = false } = props;

    const { t } = useTranslation();

    const onRender = React.useCallback(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (renderProps: any) => {
            const { onChange, value } = renderProps.field;

            return (
                <Radio.Group
                    name={name}
                    value={value}
                    onChange={onChange}
                    style={{ width: '100%' }}
                    disabled={disabled}
                >
                    <Text>{children}</Text>
                </Radio.Group>
            );
        },
        [children, disabled, name]
    );

    return (
        <FormConnector>
            {(form) => {
                const { control } = form;
                return (
                    <Block>
                        {label && (
                            <Spacer bottom={6}>
                                <Text fontWeight={600} lineHeight='20px' color='#344054'>
                                    {t(label)}
                                </Text>
                                {required && <span style={{ color: 'red' }}> *</span>}
                            </Spacer>
                        )}
                        <Controller name={name} control={control} render={onRender} rules={rules} />
                    </Block>
                );
            }}
        </FormConnector>
    );
};
