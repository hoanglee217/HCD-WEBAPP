import { UseFormReturn } from 'react-hook-form';
export interface CurrentUser {
    readonly id: string;
    readonly email: string;
    readonly username: string;
}

export interface LayoutSize {
    size: 'sm' | 'md' | 'lg';
    width: number;
    height: number;
}

export interface IconProps {
    color?: string;
    className?: string;
    onClick?: (e?: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
    width?: number;
    height?: number;
}

export interface FormValue<T> {
    readonly [key: string]: T;
}

export type RefMethodFormType = React.MutableRefObject<UseFormReturn<FormValue<unknown>> | null>;