import { Form, FormItemProps } from 'antd';
import React from 'react';
import { Controller, UseControllerProps } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { Block } from '../../layouts';
import { FormConnector } from '../FormConnector';

interface EditorFieldProps {
    readonly name: string;
    readonly placeholder?: string;
    readonly rules?: UseControllerProps['rules'];
    readonly description?: string;
    readonly formItemProps?: FormItemProps;
    readonly onchange?: (data: string) => void;
}

export const EditorField = ({
    name,
    rules,
    formItemProps,
    onchange,
}: EditorFieldProps) => {
    const { t } = useTranslation();

    return (
        <FormConnector>
            {(form) => {
                const { control } = form;

                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const onRender = ({ field, fieldState }: any) => {
                    const { onBlur, onChange, value } = field;
                    const { error } = fieldState;

                    return (
                        <Form.Item
                            name={name}
                            validateStatus={error ? 'error' : undefined}
                            help={error && t(error?.message)}
                            {...formItemProps}
                        >
                            <CKEditor
                                editor={ClassicEditor}
                                data={value || ''}
                                onChange={(_, editor) => {
                                    onChange(editor.getData());
                                    if (onchange) {
                                        onchange(editor.getData());
                                    }
                                }}
                                onBlur={onBlur}
                            />
                        </Form.Item>
                    );
                };

                return (
                    <Block width='100%'>
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
