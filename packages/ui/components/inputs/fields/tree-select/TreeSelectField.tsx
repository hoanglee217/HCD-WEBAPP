import './TreeSelectField.scss';

import { Form, TreeSelect } from 'antd';
import React from 'react';
import { Controller, UseControllerProps } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { DefaultOptionType } from 'antd/es/select';
import { FormConnector } from '../../FormConnector';
import { Block, Spacer } from '../../../layouts';
import { Text } from '../../../typo';

interface TreeSelectFieldProps {
    readonly label?: string;
    readonly name: string;
    readonly rules?: UseControllerProps['rules'];
    readonly required?: boolean;
    readonly placeholder?: string;
    readonly treeData?: DefaultOptionType[];
}

export const TreeSelectField = (props: React.PropsWithChildren<TreeSelectFieldProps>) => {
    const { t } = useTranslation();

    const { name, rules, label, required, placeholder, treeData } = props;

    const onRender = React.useCallback(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (renderProps: any) => {
            const { value, onChange } = renderProps.field;
            const { error } = renderProps.fieldState;

            const tProps = {
                treeData,
                value,
                onChange,
                treeCheckable: true,
                placeholder: placeholder,
                style: {
                    width: '100%',
                },
                treeNodeLabelProp: 'key',
                dropdownStyle: {
                    paddingTop: '10px'
                }
                
            };

            return (
                <Form.Item
                    validateStatus={error ? 'error' : undefined}
                    help={error?.message && error?.message}
                >
                    <TreeSelect {...tProps} />
                </Form.Item>
            );
        },
        [placeholder, treeData]
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
