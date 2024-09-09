import React from 'react';
import { FormProvider, useForm  } from 'react-hook-form';
import { RefMethodFormType, FormValue } from '../../Types';

interface FormBaseProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    readonly onSubmit: any;
    readonly defaultValues?: unknown;
    readonly children: ((form: ReturnType<typeof useForm>) => React.ReactNode) | React.ReactNode;
    readonly className?: string;
    readonly formRef?: RefMethodFormType;
}

export const FormBase = (props: FormBaseProps) => {
    const { formRef } = props;
    const form = useForm<FormValue<unknown>>({
        shouldUseNativeValidation: true,
        defaultValues: props.defaultValues ?? {},
        mode: 'onChange',
    });

    if (formRef) {
        formRef.current = form;
    }

    return (
        <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(props.onSubmit)} className={props.className}>
                {props.children instanceof Function ? props.children(form) : props.children}
            </form>
        </FormProvider>
    );
};