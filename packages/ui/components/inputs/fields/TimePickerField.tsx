import { TimePicker, TimePickerProps, Form } from 'antd';
import React from 'react';
import { Controller, UseControllerProps } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { dayjs, Dayjs } from '@hcd/shared';

import { FormConnector } from '../FormConnector';
import { Block, Spacer } from '../../layouts';
import { Text } from '../../typo';

interface TimePickerFieldProps extends TimePickerProps {
	readonly name: string;
	readonly rules?: UseControllerProps['rules'];
	readonly label?: string;
	readonly isUseWrapper?: boolean;
	readonly isRequired?: boolean;
}

export const TimePickerField = (props: React.PropsWithChildren<TimePickerFieldProps>) => {
    const { t } = useTranslation();

    const { name, label, rules, isRequired, ...rest } = props;

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
                    <TimePicker
                        onChange={(value: Dayjs) => {
                            onChange(value.startOf('minute').toISOString());
                        }}
                        value={value ? dayjs(value) : value}
                        needConfirm={false}
                        {...rest}
                    />
                </Form.Item>
            );
        },
        [rest, t]
    );

    return (
        <FormConnector>
            {(form) => {
                const { control } = form;

                return (
                    <Block width='100%'>
                        {label && (
                            <Spacer bottom={6}>
                                <Text
                                    fontWeight={600}
                                    lineHeight='20px'
                                    maxWidth={100}
                                    className='text-ellipsis'
                                    color='#344054'
                                >
                                    {label && t(label)}
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
