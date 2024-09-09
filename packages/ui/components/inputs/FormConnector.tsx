import { useFormContext } from 'react-hook-form';

interface FormConnectorProps {
    readonly children: (methods: ReturnType<typeof useFormContext>) => React.ReactElement;
}

export const FormConnector = ({ children }: FormConnectorProps) => {
    const methods = useFormContext();

    return children({ ...methods });
};
