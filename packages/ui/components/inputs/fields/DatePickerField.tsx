import { dayjs, Dayjs } from '@hcd/shared';
import { Block, Spacer, Text } from '@hcd/ui';
import { FormConnector } from '@hcd/ui/components/inputs/FormConnector';
import { DatePicker, Form, DatePickerProps } from 'antd';
import React from 'react';
import { Controller, UseControllerProps } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

type DatePickerFieldProps = DatePickerProps & {
    readonly name: string;
    readonly label?: string;
    readonly description?: string;
    readonly placeholder?: string;
    readonly rules?: UseControllerProps['rules'];
}

export const DatePickerField = (props: React.PropsWithChildren<DatePickerFieldProps>) => {
    const { t } = useTranslation();

    const { name, rules, label, placeholder, ...rest } = props;

    const isRequired = !!rules?.required;

    const onRender = React.useCallback(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (renderProps: any) => {
            const { onChange, value } = renderProps.field;
            const { error } = renderProps.fieldState;

            const valueDate = Array.isArray(value) ? value.map(v => dayjs(v)) : dayjs(value);

            return (
                <Form.Item
                    validateStatus={error ? 'error' : undefined}
                    help={error?.message && t(error?.message)}
                >
                    <DatePicker
                        onChange={(value) => {
                            if(Array.isArray(value)) {
                                return onChange(value.map(v => v?.toISOString()));
                            }
                            onChange(value.startOf('minute').toISOString());
                        }}
                        value={value ? valueDate as Dayjs : value}
                        placeholder={placeholder && t(placeholder)}
                        style={{ width: '100%' }}
                        needConfirm={false}
                        {...rest}
                    />
                </Form.Item>
            );
        },
        [placeholder, rest, t]
    );

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
                        {props.description && (<Spacer bottom={4}><Text>{t(props.description)}</Text></Spacer>)}
                        <Controller name={name} control={control} render={onRender} rules={rules} />
                    </Block>
                );
            }}
        </FormConnector>
    );
};
