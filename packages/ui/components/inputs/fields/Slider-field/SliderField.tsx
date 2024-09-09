import { CustomSlider } from '@hcd/ui';
import { Form, SliderSingleProps } from 'antd';
import React from 'react';
import { Controller, UseControllerProps } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { Block } from '../../../layouts';
import { FormConnector } from '../../FormConnector';

interface SliderFieldProps {
    readonly name: string;
    readonly rules?: UseControllerProps['rules'];
    readonly min: number;
    readonly max: number;
    readonly marks: SliderSingleProps['marks'];
    readonly convertValue?: (v: number) => number;
    readonly onChange?: (value: number) => void;
}

export const SliderField = (
    props: React.PropsWithChildren<SliderFieldProps>
) => {
    const { t } = useTranslation();
    const { name, rules, min, max, marks } = props;

    const onRender = React.useCallback(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (renderProps: any) => {
            const { onChange, value } = renderProps.field;
            const { error } = renderProps.fieldState;
            const handleChange = (v: number) => {
                onChange(v);
                props.onChange?.(v);
            };

            return (
                <Form.Item
                    style={{ alignSelf: 'flex-start', paddingRight: 10, paddingLeft: 10 }}
                    validateStatus={error ? 'error' : undefined}
                    help={error?.message && t(error?.message)}
                >
                    <CustomSlider
                        value={value}
                        min={min}
                        max={max}
                        marks={marks}
                        step={null}
                        onChange={handleChange}
                        dots={false}
                    />
                </Form.Item>
            );
        },
        [marks, max, min, props, t]
    );

    return (
        <FormConnector>
            {(form) => {
                const { control } = form;
                return (
                    <Block>
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
