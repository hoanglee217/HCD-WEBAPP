import { Form } from 'antd';
import React from 'react';
import { UseControllerProps, UseFieldArrayReturn, useFieldArray , useFormContext, FieldValues } from 'react-hook-form';

import { Block, Spacer } from '../../layouts';
import { Text } from '../../typo';
import { FormConnector } from '../FormConnector';

export interface FieldArrayProps<T extends FieldValues>{
    readonly name: string;
    readonly isUseWrapper?: boolean;
    readonly label?: string;
    readonly rules?: UseControllerProps['rules'];
    readonly children: (formControl: UseFieldArrayReturn<T>) => React.ReactElement;
}

export function FieldArray<T extends FieldValues>(props: FieldArrayProps<T>) {

    const { label, name, rules, children, isUseWrapper = true } = props;

    const isRequired = !!rules?.required;
    
    const { control, watch } = useFormContext();
    
    const value = watch(name);

    const onRender = React.useCallback(
        (fieldArrayReturn: UseFieldArrayReturn<T>) => {
            return (
                <Form.Item>
                    {children({...fieldArrayReturn, fields: value})}
                </Form.Item>
            );
        },
        [children, value]
    );

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const fieldArrayReturn = useFieldArray<any, any>({
        control,
        name
    });

    return (
        <FormConnector>
            {() => {
                if (isUseWrapper) {
                    return (
                        <Block width='100%'>
                            <Spacer bottom={6}>
                                <Text
                                    fontWeight={600}
                                    lineHeight='20px'
                                    translateCode={label}
                                />
                                {isRequired && (
                                    <span style={{ color: 'red' }}> *</span>
                                )}
                            </Spacer>
                            {onRender(fieldArrayReturn)}
                        </Block>
                    );
                }
                return onRender(fieldArrayReturn);
            }}
        </FormConnector>
    );
}