import { Switch, Form } from 'antd';
import React from 'react';
import { Controller, UseControllerProps } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { Block, FlexBox } from '../../layouts';
import { Text } from '../../typo';
import { FormConnector } from '../FormConnector';

interface SwitchFieldProps {
	readonly className?: string;
	readonly name: string;
	readonly label?: string;
	readonly description?: string;
	readonly rules?: UseControllerProps['rules'];
	readonly directionLabel?: React.CSSProperties['flexDirection'];
	readonly justifyContent?: React.CSSProperties['justifyContent'];
	readonly alignItems?: React.CSSProperties['alignItems'];
	readonly gap?: React.CSSProperties['gap'];
	readonly width?: React.CSSProperties['width'];
	readonly onChange?: (value: boolean) => void;
	readonly disabled?: boolean;
	readonly prefix?: React.ReactNode;
	readonly defaultChecked?: boolean;
}

export const SwitchField = (
    props: React.PropsWithChildren<SwitchFieldProps>
) => {
    const { t } = useTranslation();
    const { name, rules, label, description, directionLabel, justifyContent, width, disabled } = props;

    const onRender = React.useCallback(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (renderProps: any) => {
            const { onChange, value } = renderProps.field;
            const { error } = renderProps.fieldState;
            const handleChange = (value: boolean) => {
                onChange(value);
                props.onChange?.(value);
            };
            
            return (
                <Form.Item
                    style={{ alignSelf: 'flex-start' }}
                    validateStatus={error ? 'error' : undefined}
                    help={error?.message && t(error?.message)}
                >
                    <FlexBox>
                        <Switch  disabled={disabled} onChange={handleChange} checked={value} defaultChecked = {props.defaultChecked}/>
                        {props.prefix && props.prefix}
                    </FlexBox>
                </Form.Item>
            );
        },
        [disabled, props, t]
    );

    const isRequired = !!rules?.required;

    return (
        <FormConnector>
            {(form) => {
                const { control } = form;
                return (
                    <FlexBox 
                        className={props.className}
                        width={width} 
                        alignItems={props.alignItems}
                        justifyContent={justifyContent} 
                        gap={props.gap}
                        direction={directionLabel} 
                    >
                        <Block>
                            {label && (
                                <Block>
                                    <Text
                                        fontWeight={600}
                                        lineHeight='20px'
                                        color='#344054'
                                    >
                                        {t(label ?? '')}
                                    </Text>
                                    {isRequired && (
                                        <span style={{ color: 'red' }}> *</span>
                                    )}
                                </Block>
                            )}
                            {description && (
                                <Block>
                                    <Text>{t(description)}</Text>
                                </Block>
                            )}
                        </Block>
                        <Controller
                            name={name}
                            control={control}
                            render={onRender}
                            rules={rules}
                        />
                    </FlexBox>
                );
            }}
        </FormConnector>
    );
};

SwitchField.defaultProps = {
    justifyContent: 'normal',
    width: 'fit-content',
    alignItems: 'center',
    gap: 16,
};

