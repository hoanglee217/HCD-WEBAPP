import { Checkbox , Form } from 'antd';
import React from 'react';
import { Controller, UseControllerProps } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { Block } from '../../layouts';
import { Text } from '../../typo';
import { FormConnector } from '../FormConnector';

interface CheckboxFieldProps {
    readonly name: string;
    readonly className?: string
    readonly placeholder?: string;
    readonly rules?: UseControllerProps['rules'];
    readonly onChange?: (value: boolean) => void;
}

export const CheckboxField = (
    props: React.PropsWithChildren<CheckboxFieldProps>
) => {
    const { t } = useTranslation();

    const { children, name, rules } = props;

    const onRender = React.useCallback(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (renderProps: any) => {
            const { onChange, value } = renderProps.field;
            const { error } = renderProps.fieldState;
            
            return (
                <Form.Item
                    validateStatus={error ? 'error' : undefined}
                    help={error?.message && t(error?.message)}
                >
                    <Checkbox 
                        name={name} 
                        checked={value} 
                        onChange={(e) => {
                            onChange(e.target.checked);
                            props.onChange?.(e.target.checked);
                        }}>
                        <Text>{children}</Text>
                    </Checkbox>
                </Form.Item>
            );
        },
        [children, name, props, t]
    );

    return (
        <FormConnector>
            {(form) => {
                const { control } = form;
                return (
                    <Block className={props.className}>
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
