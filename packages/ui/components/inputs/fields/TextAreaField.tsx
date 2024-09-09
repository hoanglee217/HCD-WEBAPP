import { Input, InputProps, Form } from 'antd';
import React from 'react';
import { Controller, UseControllerProps } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { Block, Spacer } from '../../layouts';
import { Text } from '../../typo';
import { FormConnector } from '../FormConnector';

interface TextAreaFieldProps extends InputProps {
    readonly name: string;
    readonly label: string;
    readonly placeholder?: string;
    readonly rules?: UseControllerProps['rules'];
    readonly rows?: number;
    readonly disabled?: boolean;
    readonly onBlur?: (e?: React.FocusEvent<unknown>) => void;
    readonly onChange?: (e: React.ChangeEvent<unknown>) => void;
}

const TextArea = Input.TextArea;

export const TextAreaField = (props: React.PropsWithChildren<TextAreaFieldProps>) => {
    const { t } = useTranslation();

    const { label, name, placeholder, rules, rows } = props;

    const onRender = React.useCallback(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (renderProps: any) => {
            const { onBlur, onChange, value } = renderProps.field;
            const { error } = renderProps.fieldState;

            const handleBlur = (e?: React.FocusEvent<HTMLTextAreaElement> ) => {
                onBlur(e);
                props.onBlur?.(e);
            };

            const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
                onChange(e);
                props.onChange?.(e);
            };

            return (
                <Form.Item
                    validateStatus={error ? 'error' : undefined}
                    help={error?.message && t(error?.message)}
                >
                    <TextArea
                        ref={renderProps.ref}
                        rows={rows ?? 4}
                        name={name}
                        value={value}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        disabled={props.disabled}
                        placeholder={placeholder && t(placeholder)}
                    />
                </Form.Item>
            );
        },
        [name, placeholder, props, rows, t]
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
                        </Spacer>
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
