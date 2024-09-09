import { Select, SelectProps, Form, Input } from 'antd';
import React, { useMemo, useCallback } from 'react';
import { Controller, UseControllerProps } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { DefaultOptionType } from 'antd/es/select';

import { Block, Spacer } from '../../layouts';
import { Text } from '../../typo';
import { FormConnector } from '../FormConnector';
import { DropdownRenderCreate } from './DropdownRenderCreate';

interface SelectFieldProps<T> extends SelectProps {
    readonly name: string;
    readonly label?: string;
    readonly placeholder?: string;
    readonly rules?: UseControllerProps['rules'];
    readonly options?: DefaultOptionType[];
    readonly dataSource?: Array<T>;
    readonly dataValueKey?: keyof T;
    readonly dataLabelKey?: keyof T;
    readonly onCreate?: (value?: string) => void;
    readonly createTextCode?: string;
    readonly typeCreate?: 'input' | 'modal';
    readonly description?: string;
    readonly onChange?: SelectProps['onChange'];
    readonly addonBefore?: string;
    readonly addonBeforeWidth?: string | number;
}

const listToOptions = <T,>(
    list: Array<T>,
    labelKey: keyof T,
    valueKey: keyof T
) => {
    return list.map((item) => ({
        label: item[labelKey],
        value: item[valueKey]
    } as DefaultOptionType)
    );
};

export const SelectField = <T,>(props: SelectFieldProps<T>) => {
    const { t } = useTranslation();
    const { name, rules, label, placeholder, options, dataSource, dataLabelKey, dataValueKey, typeCreate, filterOption, onCreate, addonBefore, addonBeforeWidth = 10, description, createTextCode, ...rest } = props;

    const isRequired = !!rules?.required;

    const selectOptions = useMemo(() => {
        if (dataSource) {
            return listToOptions(
                dataSource,
                dataLabelKey!,
                dataValueKey!
            );
        }
        return options ?? [];
    }, [dataLabelKey, dataSource, dataValueKey, options]);

    const dropdownRenderCustom = useCallback((options: React.ReactElement) => {
        return (
            <DropdownRenderCreate 
                options={options} 
                onCreate={onCreate} 
                typeCreate={typeCreate} 
                createText={t(createTextCode!)}
            />
        );
    },
    [onCreate, typeCreate, t, createTextCode]
    );

    const onRender = React.useCallback(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (renderProps: any) => {
            const { onChange, value } = renderProps.field;
            const { error } = renderProps.fieldState;

            const handleChange: SelectProps['onChange'] = (value, option) => {
                onChange(value ?? null);
                props?.onChange?.(value, option);
            };

            return (
                <Form.Item
                    validateStatus={error ? 'error' : undefined}
                    help={error?.message && t(error?.message)}
                >
                    {addonBefore ?
                        <Input.Group compact>
                            <Input style={{ width: addonBeforeWidth, textAlign: 'center' }} value={addonBefore} disabled />
                            <Select
                                style={{ width: `calc(100% - ${addonBeforeWidth})` }}
                                filterOption={filterOption}
                                value={value}
                                dropdownRender={dropdownRenderCustom}
                                placeholder={placeholder && t(placeholder)}
                                options={selectOptions}
                                allowClear
                                {...rest}
                                onChange={handleChange}
                            />
                        </Input.Group>
                        :
                        <Select
                            style={{ width: '100%' }}
                            filterOption={filterOption}
                            value={value}
                            dropdownRender={dropdownRenderCustom}
                            placeholder={placeholder && t(placeholder)}
                            options={selectOptions}
                            allowClear
                            {...rest}
                            onChange={handleChange}
                            listItemHeight={42}
                        />
                    }
                </Form.Item>
            );
        },
        [addonBefore, addonBeforeWidth, dropdownRenderCustom, filterOption, placeholder, props, rest, selectOptions, t]
    );

    return (
        <FormConnector>
            {(form) => {
                const { control } = form;
                return (
                    <Block width='100%'>
                        {label && (
                            <Spacer bottom={6}>
                                <Text fontWeight={600} lineHeight='20px' maxWidth={100} className='text-ellipsis' color='#344054'>
                                    {label && t(label)}
                                </Text>
                                {isRequired && <span style={{ color: 'red' }}> *</span>}
                            </Spacer>
                        )}
                        {description && (<Spacer bottom={4}><Text>{description}</Text></Spacer>)}
                        <Controller name={name} control={control} render={onRender} rules={rules} />
                    </Block>
                );
            }}
        </FormConnector>
    );
};

const filterOptionsDefault = (input: string, option: DefaultOptionType) => (option?.label?.toString().toLocaleLowerCase() ?? '').includes(input.toLocaleLowerCase());

SelectField.defaultProps = {
    dataLabelKey: 'name',
    dataValueKey: 'id',
    typeCreate: 'modal',
    createTextCode: 'Add new',
    filterOption: filterOptionsDefault
};