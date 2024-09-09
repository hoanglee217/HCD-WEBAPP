import './InputNumberField.scss';

import { Form, InputNumber, Button } from 'antd';
import React from 'react';
import { Controller, UseControllerProps} from 'react-hook-form';

import { useTranslation } from 'react-i18next';
import { FormConnector } from '../../FormConnector';
import { Block, Spacer } from '../../../layouts';
import { Text } from '../../../typo';

interface InputNumberFieldProps {
	readonly label?: string;
	readonly name: string;
	readonly rules?: UseControllerProps['rules'];
	readonly required?: boolean;
    readonly onChange?: (value?: number) => void;
    readonly disabled?: boolean;
    readonly max?: number;
}

export const InputNumberFieldCustom = (props: React.PropsWithChildren<InputNumberFieldProps>) => {
    const { t } = useTranslation();
    const { name, rules, label, required, max = 100 } = props;

    const onRender = React.useCallback(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (renderProps: any) => {
            const { value, onChange } = renderProps.field;
            const { error } = renderProps.fieldState;
            const handleChange = (value?: number) => {
                if(value && (value > max || value < 1)) return;
                onChange(value);
                props.onChange?.(value);
            };

            return (
                <Form.Item
                    validateStatus={error ? 'error' : undefined}
                    help={error?.message && error?.message}
                >
                    <Block className='input-number-field-custom'>
                        <Button
                            className={`button-custom left ${error ? 'error' : ''}`}
                            onClick={() => handleChange(value > 1 ? value - 1 : value)}
                        >
							-
                        </Button>
                        <InputNumber
                            disabled={props.disabled}
                            className='input-custom'
                            value={value}
                            min={1}
                            onKeyDown={(event) => {
                                if (!/[0-9]/.test(event.key)) {
                                    event.preventDefault();
                                }
                            }}
                            max={max}
                            onChange={handleChange}
                            controls={false}
                        />
                        <Button
                            className={`button-custom right ${error ? 'error' : ''}`}
                            disabled={props.disabled}
                            onClick={() => handleChange(value < 100 ? value + 1 : value)}
                        >
							+
                        </Button>
                    </Block>
                </Form.Item>
            );
        },
        [max, props]
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
