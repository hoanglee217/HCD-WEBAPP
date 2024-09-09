import { FlexBox, SelectField, Text } from '@hcd/ui';
import React from 'react';
import { BaseOptionType } from 'antd/es/select';
import { Checkbox, Tooltip } from 'antd';
import { SelectProps } from 'antd/lib';
import { useFormContext } from 'react-hook-form';
import { DisplayValueType } from 'rc-select/lib/interface';

interface SelectFieldCheckBoxProps extends SelectProps  {
	name: string;
    label: string;
    placeholderCode?: string;
    allData?: string;
}

export const SelectFieldCheckBox = (props: SelectFieldCheckBoxProps) => {
    const { name, label} = props;
    const { watch } = useFormContext();

    const optionsRender = (option: BaseOptionType) => {
        const values = watch(name);
        return <FlexBox gap={12} alignItems='center'>
            <Checkbox checked={values?.includes(option.value)} /> 
            <FlexBox gap={12} alignItems='center'>
                <Text>{option.label}</Text>
            </FlexBox>
        </FlexBox>;
    };
    const maxTagPlaceholder = (omittedValues: DisplayValueType[], options: BaseOptionType[]) => {

        if (watch(name)?.length == options.length) {
            return props.allData ? props.allData : 'Filter all';
        }
        return (
            <Tooltip title={omittedValues.map(({ label }) => label).join(', ')}>
                <span>+ {omittedValues.length}...</span>
            </Tooltip>
        );
    };

    return (
        <SelectField
            filterOption= {props.filterOption}
            name={name}
            className={props.allData ? 'placeholderSelectAll' : ''}
            placeholder={props.allData ? props.allData : props.placeholderCode}
            options={props.options}
            mode='multiple'
            label={label}
            listHeight={376}
            menuItemSelectedIcon={null}
            showSearch={true}
            optionRender={({ data }) => optionsRender(data)}
            maxTagCount={watch(name)?.length == props.options?.length ? 0 : 'responsive'}
            maxTagPlaceholder={(value)=>maxTagPlaceholder(value, props.options || [])}
        />
    );
};
